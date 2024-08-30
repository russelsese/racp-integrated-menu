// integrated-menu-init.js
(function() {
    // Create and append the integrated-menu- CSS
    var css = `
        .integrated-menu-loader {
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 60px;
            height: 60px;
            background-color: darkblue;
            border-radius: 50%;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: white;
            z-index: 1000;
        }
        .integrated-menu-iframe {
            position: fixed;
            bottom: 100px;
            left: 20px;
            width: 400px;
            height: 500px;
            border: none;
            display: none;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
        .integrated-menu-loader.open {
            background-color: white;
            color: darkblue;
        }
        @media (max-width: 600px) {
            .integrated-menu-iframe {
                width: 90%;
                left: 5%;
                height: 60%;
                bottom: 90px;
            }
        }
    `;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // Create the toggle button
    var integratedMenuButton = document.createElement('div');
    integratedMenuButton.id = 'integratedMenuButton';
    integratedMenuButton.className = 'integrated-menu-loader';
    integratedMenuButton.innerHTML = '+';
    document.body.appendChild(integratedMenuButton);

    // Create the iframe
    var integratedMenuFrame = document.createElement('iframe');
    integratedMenuFrame.id = 'integratedMenuFrame';
    integratedMenuFrame.className = 'integrated-menu-iframe';
    integratedMenuFrame.src = 'integrated-menu.html'; // Path to your integrated-menu-.html file
    document.body.appendChild(integratedMenuFrame);

    // Toggle integrated-menu function
    function toggleIntegratedMenu() {
        if (integratedMenuFrame.style.display === 'none' || integratedMenuFrame.style.display === '') {
            integratedMenuFrame.style.display = 'block';
            integratedMenuButton.classList.add('open');
            integratedMenuButton.innerHTML = '-';
        } else {
            integratedMenuFrame.style.display = 'none';
            integratedMenuButton.classList.remove('open');
            integratedMenuButton.innerHTML = '+';
        }
    }

    // Add event listener to the button
    integratedMenuButton.addEventListener('click', toggleIntegratedMenu);
})();
