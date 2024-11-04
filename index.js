const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value;
    const outer = document.getElementById('outer');

    // Create list item
    const listitem = document.createElement('LI');
    
    // Create a span for the text
    const textSpan = document.createElement('span');
    textSpan.innerText = textInput;
    listitem.appendChild(textSpan);

    // Edit button
    const editButton = document.createElement('button');
    editButton.className = 'editbtn';
    editButton.innerHTML = '<i class="bi bi-pencil"></i>';
    editButton.addEventListener('click', () => {
        document.getElementById('textInput').value = textSpan.innerText;
        listitem.remove();
    });

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'deletebtn';
    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteButton.addEventListener('click', () => {
        listitem.remove();
    });

    // Create a container for buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    
    listitem.appendChild(buttonContainer);
    outer.appendChild(listitem);

   
    document.getElementById('textInput').value = '';
});


const todoCenter = document.querySelector('.todo-center');

function rain() {
    const showers = ['😀', '🎉', '🌟', '❤️', '🚀'];

    const shower = document.createElement('span');
    shower.textContent = showers[Math.floor(Math.random() * showers.length)];
    shower.style.position = 'absolute';

    
    const leftPosition = Math.random() * (todoCenter.offsetWidth - 50);
    shower.style.left = leftPosition + 'px';

  
    const randomFontSize = Math.random() * (5 - 20) + 20;
    shower.style.fontSize = randomFontSize + 'px';

   
    shower.style.width = randomFontSize + 'px';  
    shower.style.height = randomFontSize + 'px'; 
    shower.style.opacity = '1';
    todoCenter.appendChild(shower);

    // Animate the falling effect using GSAP   
    gsap.fromTo(shower, {
        y: -50,
        opacity: 1,
    }, {
        y: todoCenter.offsetHeight + 50,
        opacity: 0,
        duration: Math.random() * 2 + 3,
        ease: 'power1.out',
        onComplete: () => shower.remove(),
    });
}

// Set the height and width of the todoCenter element (if needed)

todoCenter.style.height = '600px'; // Set a specific height
todoCenter.style.position = 'relative'; // Ensure relative positioning for absolute children

setInterval(rain, 500);


