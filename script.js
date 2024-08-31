//send message to bg script

async function sendMessageAboutLastVisitedPage() {
    try {
        const response = await chrome.runtime.sendMessage({
            page: "homepage"
        });
    } catch (err) {
        console.log("Error sending message:", err);
    }
}



sendMessageAboutLastVisitedPage()