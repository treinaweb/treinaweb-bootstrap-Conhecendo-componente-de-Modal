var myModal = document.querySelector('.modal');

function showModal() {
    var bsModal = new bootstrap.Modal(myModal, {
        keyboard: false,
        backdrop: 'static'
    });
    bsModal.show();
}