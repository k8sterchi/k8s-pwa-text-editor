const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default browser install prompt
    event.preventDefault();

    // Store the event for later use
    const deferredPrompt = event;

    // Show the custom install button
    butInstall.style.display = 'block';

    // Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', async () => {
        if (deferredPrompt) {
            // Show the browser's install prompt
            deferredPrompt.prompt();

            // Wait for the user's response
            const choiceResult = await deferredPrompt.userChoice;

            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }

            // Reset the deferredPrompt to null
            deferredPrompt = null;
        }
    });
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
});