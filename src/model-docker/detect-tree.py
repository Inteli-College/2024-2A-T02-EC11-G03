# main.py
import detectree as dtr
import matplotlib.pyplot as plt
import rasterio as rio
from rasterio import plot
from deepforest import main as deepforest_main
from deepforest import get_data
import csv
import numpy as np
import os

def segment_image(tile_filename):
    # Use the pre-trained model to segment the image into tree/non-tree-pixels
    y_pred = dtr.Classifier().predict_img(tile_filename)

    # Side-by-side plot of the tile and the predicted tree/non-tree pixels
    figwidth, figheight = plt.rcParams["figure.figsize"]
    fig, axes = plt.subplots(1, 2, figsize=(2 * figwidth, figheight))
    with rio.open(tile_filename) as src:
        plot.show(src, ax=axes[0])
    axes[1].imshow(y_pred, cmap='Greens')

    plt.show()

    return y_pred

def predict_image_with_deepforest(image_path):
    model = deepforest_main.deepforest()
    model.use_release()

    sample_image_path = get_data(image_path)
    img = model.predict_image(path=sample_image_path, return_plot=True)

    # Switch the channel order to match matplotlib's format
    plt.imshow(img[:,:,::-1])
    plt.show()

def create_bounding_boxes(image_path, image_size, box_size, y_pred, csv_output_path):
    # Find tree positions (255 indicates tree pixels)
    tree_positions = np.argwhere(y_pred == 255)
    bounding_boxes = []
    group_size = 13  # Group size for bounding boxes

    for i in range(0, len(tree_positions), group_size):
        group = tree_positions[i:i+group_size]
        if len(group) == group_size:
            y, x = group[group_size // 2]
            xmin = max(0, x - box_size // 2)
            ymin = max(0, y - box_size // 2)
            xmax = min(image_size, x + box_size // 2)
            ymax = min(image_size, y + box_size // 2)
            bounding_boxes.append([image_path, xmin, ymin, xmax, ymax, 'Tree'])

    # Save bounding boxes to CSV
    with open(csv_output_path, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['image_path', 'xmin', 'ymin', 'xmax', 'ymax', 'label'])
        writer.writerows(bounding_boxes)

    print('CSV criado com sucesso.')

def train_deepforest_model(image_path, annotations_file):
    model = deepforest_main.deepforest()
    model.use_release()
    
    model.config["epochs"] = 10
    model.config["save-snapshot"] = False
    model.config["train"]["csv_file"] = annotations_file
    model.config["train"]["root_dir"] = os.path.dirname(image_path)

    model.create_trainer()
    model.trainer.fit(model)

# Main function to run the workflow
if __name__ == "__main__":
    tile_filename = 'cidadeUniversitaria.jpg'
    image_path = 'image_praca_liberdade.jpg'
    csv_output_path = 'tree_bounding_boxes.csv'
    image_size = 250
    box_size = 20

    # Segment image and predict trees
    y_pred = segment_image(tile_filename)
    create_bounding_boxes(image_path, image_size, box_size, y_pred, csv_output_path)

    # Predict trees in another image using DeepForest
    predict_image_with_deepforest(image_path)
