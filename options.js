// Saves options to chrome.storage
function save_options() {
    var username = document.getElementById('username').value;

    chrome.storage.sync.set({'username': username},
      function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
          status.textContent = '';
        }, 750);
      });
}

document.getElementById('save').addEventListener('click',
    save_options);