const elements = {
    container: document.getElementById("modal-container"),
    overlay: document.getElementById("modal-overlay"),
    box: document.getElementById("modal-box"),
    title: document.getElementById("modal-title"),
    content: document.getElementById("modal-content"),
    cancelbtn: document.getElementById("modal-cancel"),
    confirmbtn: document.getElementById("modal-confirm"),
};

var callbacks = {
    onCancel: null,
    onConfirm: null,
};

// Function called when 'confirm' button is clicked
function defaultConfirmCallback() {
    closeModal();
    typeof callbacks.onConfirm === "function" && callbacks.onConfirm();
}

// Function called when 'cancel' button is clicked
function defaultCancelCallback() {
    closeModal();
    typeof callbacks.onCancel === "function" && callbacks.onCancel();
}

// Function to show the modal
function showModal(title, content, options) {
    // Load the default options
    options = {
        cancelBtnText: "Cancel",
        confirmBtnText: "Confirm",
        showCancelBtn: true,
        showConfirmBtn: true,
        onCancel: null,
        onConfirm: null,
        ...options,
    };
    // Make the modal visible
    elements.container.style.display = 'block'
    elements.container.classList.add("visible");
    elements.container.classList.remove("hidden");

    // Manipulate the content
    elements.title.innerText = title;
    elements.content.innerText = content;
    elements.cancelbtn.innerText = options.cancelBtnText;
    elements.confirmbtn.innerText = options.confirmBtnText;

    // To show or not to show the buttons
    elements.cancelbtn.style.display = options.showCancelBtn ? "block" : "none";
    elements.confirmbtn.style.display = options.showConfirmBtn
        ? "block"
        : "none";

    // Add event listeners
    callbacks = { onCancel: options.onCancel, onConfirm: options.onConfirm };
}

// Function to close the modal
function closeModal() {
    elements.container.classList.add("hidden");
    elements.container.classList.remove("visible");
}

// Adds appropriate callbacks
elements.overlay.addEventListener("click", defaultCancelCallback);
elements.cancelbtn.addEventListener("click", defaultCancelCallback);
elements.confirmbtn.addEventListener("click", defaultConfirmCallback);

// Required for the display of the modal container to be none after the animation ends
// Otherwise the container will still be there in the forefront of the webpage above
// all other elements, which will cause issues with functionality as all clicks will
// be taken by this element rather than the desired one
elements.container.addEventListener('animationend', () => {

    // Set the display to none only if the state is hidden because
    // this event will also get fired when the fadein animation ends. 
    if(elements.container.classList.contains('hidden')){
        elements.container.style.display = 'none'
    }
})

export default { show: showModal };
