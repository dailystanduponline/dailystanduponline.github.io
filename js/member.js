const image_array = ['turtle-icon_1.png',
                    'squirrel-icon_1.png',
                    'frog-icon_1.png',
                    'horse-icon_1.png',
                    'gorilla-icon_1.png',
                    'cat-icon_1.png',
                    'kangoroo-icon_1.png',
                    'fox-icon_1.png',
                    'furby-icon_1.png',
                    'camel-icon_1.png',
                    'bee-icon_1.png',
                    'butterfly-icon_1.png',
                    'giraffe-icon_1.png',
                    'tiger-icon_1.png',
                    'zebra-icon_1.png'];

function random_image() {
    const randomImage = image_array[Math.floor(Math.random() * image_array.length)];
    return 'img/icons/'+randomImage
}

const types = {
    REGULAR: 'regular',
    CENTER: 'center'
};

function create_member(name, id, type, image=null) {
    let chip = document.createElement("a");
    let img = document.createElement("img");
    chip.setAttribute('id', 'member_'+id);
    img.setAttribute('alt', 'Contact Person');
    chip.textContent = name.trim();

    switch (type) {
        case types.REGULAR:
            chip.setAttribute('class', 'chip mt-3 mb-0 font-chips chip-lg cyan darken-2 white-text');
            break;
        case types.CENTER:
            chip.setAttribute('class', 'chip mt-3 mb-0 font-chip-center chip-lg cyan darken-2 white-text animated fadeIn');
            break;
        default:
            chip.setAttribute('class', 'chip mt-3 mb-0 font-chips chip-lg cyan darken-2 white-text');
    }

    if (image === null) {
        if(name.toLowerCase().includes('соня')){
            img.setAttribute('src', "img/icons/pig-icon_1.png");
        }
        else if (name.toLowerCase().includes('гриша')) {
            img.setAttribute('src', "img/icons/frog-icon_1.png");
        }
        else {
            img.setAttribute('src', random_image());
        }
    } else {
        img.setAttribute('src', image);
    }
    chip.appendChild(img);

    if (type === types.REGULAR){
        let chips = document.getElementById("chips");
        chips.appendChild(chip);
    } else if (type === types.CENTER){
        let chips = document.getElementById("center_chip");
        chips.appendChild(chip);
    } else {
        console.error("Wrong member type");
    }

}

// Reset all
function remove_member_center() {
    let elements = document.getElementById("center_chip").getElementsByTagName("a");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function move_member(id) {
    remove_member_center();
    let elem = document.getElementById(id);
    elem.classList.add("animated");
    elem.classList.add("fadeOut");
    let image = document.getElementById(id).getElementsByTagName("*")[0].getAttribute("src");
    create_member(elem.textContent,-1,types.CENTER,image);
}

/*
    Choose next random member to move in center
 */
function choose_random_member() {
    let elements = document.getElementById("chips").querySelectorAll("a:not(.animated)");
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    move_member(randomElement.getAttribute("id"));
}

/*
    Create members from input field
 */
function create_members() {
    let elements = document.getElementById("chips").getElementsByTagName("a");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    let members_string = document.getElementById("members_add").value;
    let members = members_string.split(',');
    let members_custom = document.getElementById("custom_members").getElementsByClassName("custom_toggle_button");
    var custom_members_checks = {};
    members_custom.forEach(function (item) {
        custom_members_checks[item.id.split("_")[1]] = item.checked;
    });
    let members_custom_inputs = document.getElementById("custom_members").getElementsByTagName("input");
    members_custom_inputs.forEach(function (item) {
        if (item.type=='text') {
            if(custom_members_checks[item.id.split("_")[1]]){
                members.push(item.value);
            }
        }
    });
    
    members.forEach(function (item, index) {
        if(item.length > 0) {
            create_member(item, index,types.REGULAR,null);
        }
    });
    remove_member_center();
}

/*
    Create members from custom list
 */
function create_custom_members() {
    var parent = document.querySelector('#custom_members');
    let urlParams = new URLSearchParams(window.location.search);
    let url_param_members = urlParams.get('members');
    let members = url_param_members.split(',').filter(item => item.trim() !== '');
    members.forEach(function (item, index) {
        let div = document.createElement('div');
        div.innerHTML = 
        `<input type="text" class="form-control name_input" aria-describedby="button-addon" id="in_${index}" value="${item}">
        <div class="input-group-append">
            <input type="checkbox" class="custom_toggle_button" id="tb_${index}" checked>
        </div>`;
        div.setAttribute('class', 'input-group mb-3');
        parent.appendChild(div);
    });
}



/*
    Reset all members - set all visible and remove member from center
 */
function reset() {
    let elements = document.getElementById("chips").getElementsByTagName("a");
    elements.forEach(function (item){
        if (item.classList.contains("animated")){
            item.classList.remove("animated");
        }
        if (item.classList.contains("fadeOut")){
            item.classList.remove("fadeOut");
        }
    });
    remove_member_center();
}
