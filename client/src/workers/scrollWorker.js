console.log('Worker loaded');
self.onmessage = e => {
    const data = JSON.parse(e.data);
    const { heightTrigger, windowScrollHeight, windowInnerHeight } = data;
    // Do the comparison computation here
    const heightToHide = (windowInnerHeight / 100) * heightTrigger;
    const newStatus = windowScrollHeight > heightToHide;

    // Send the result back to the main thread
    self.postMessage(newStatus);
};
