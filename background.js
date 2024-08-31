//receive message and store value

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.page) {
        chrome.storage.local.set({ page: request.page }, () => {
            sendResponse({ status: "Page saved" });
        });
        return true; // Keeps the message channel open for sendResponse
    }
});