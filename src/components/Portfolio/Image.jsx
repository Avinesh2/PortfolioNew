import React, { useEffect, useRef } from 'react';

const YourComponent = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image(); // Use 'new' to instantiate the Image object
    image.src = 'your-image-source.jpg';

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the original image on the canvas
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // Get the image data
      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      const data = imageData.data;

      // Loop through each pixel and make black pixels transparent
      for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];

        // Check if the pixel is black
        if (red === 0 && green === 0 && blue === 0) {
          // Make black pixels transparent
          data[i + 3] = 0; // Set alpha to 0 (transparent)
        }
      }

      // Put the modified image data back on the canvas
      ctx.putImageData(imageData, 0, 0);
    };
  }, []);

  return (
    <canvas key="uniqueCanvasKey" ref={canvasRef}></canvas>
  );
};

export default YourComponent;
