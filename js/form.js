let card_number = 1;

function add_card(insert_element_id) {
    let section = document.createElement("section");
    section.setAttribute('class', 'form-gradient mb-5');
    let card = document.createElement("div");
    card.setAttribute('class', 'card');

    // --- Header ---
    let card_header = document.createElement('div');
    card_header.setAttribute('class', 'header bg-problem-card');

    let card_close_div = document.createElement('div');
    card_close_div.setAttribute('class', 'float-lg-none');
    let card_close_button = document.createElement('button');
    card_close_button.setAttribute('type', 'button');
    card_close_button.setAttribute('class', 'btn close text-white');
    card_close_button.setAttribute('onclick', 'this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode); return false;');
    card_close_button.textContent = '×';

    let header_div = document.createElement('div');
    header_div.setAttribute('class', 'row d-flex justify-content-center');
    let header_h3 = document.createElement('h3');
    header_h3.setAttribute('class', 'white-text mb-0 py-2 font-weight-bold');
    header_h3.textContent = 'Problem ' + card_number.toString();
    card_number += 1;
    card_close_div.appendChild(card_close_button);
    card_header.appendChild(card_close_div);
    header_div.appendChild(header_h3);
    card_header.appendChild(header_div);
    // --- Header ---

    // --- Body ---
    let card_body = document.createElement('div');
    card_body.setAttribute('class', 'card-body mx-4');

    let team_members_div = document.createElement('div');
    team_members_div.setAttribute('class', 'md-form');
    let team_members_icon = document.createElement('i');
    team_members_icon.setAttribute('class', 'fas fa-users prefix grey-text');
    let team_members_input = document.createElement('input');
    team_members_input.setAttribute('type', 'text');
    team_members_input.setAttribute('id', 'members_card'+card_number);
    team_members_input.setAttribute('class', 'form-control');
    team_members_input.setAttribute('onfocus', 'onEnter(this)');
    team_members_input.setAttribute('onblur', 'onExit(this)');
    let team_members_label = document.createElement('label');
    team_members_label.setAttribute('for', 'members_card'+card_number);
    team_members_label.setAttribute('class','');
    team_members_label.textContent = "Team members";


    let problem_div = document.createElement('div');
    problem_div.setAttribute('class', 'md-form');
    let problem_icon = document.createElement('i');
    problem_icon.setAttribute('class', 'fas fa-pencil-alt prefix grey-text');
    let problem_textarea = document.createElement('textarea');
    problem_textarea.setAttribute('id', 'problem_card'+card_number);
    problem_textarea.setAttribute('class', 'md-textarea form-control');
    problem_textarea.setAttribute('rows', '3');
    problem_textarea.setAttribute('onfocus', 'onEnter(this)');
    problem_textarea.setAttribute('onblur', 'onExit(this)');
    let problem_label = document.createElement('label');
    problem_label.setAttribute('for', 'problem_card'+card_number);
    problem_label.setAttribute('class','');
    problem_label.textContent = "Your problem";


    team_members_div.appendChild(team_members_icon);
    team_members_div.appendChild(team_members_input);
    team_members_div.appendChild(team_members_label);

    problem_div.appendChild(problem_icon);
    problem_div.appendChild(problem_textarea);
    problem_div.appendChild(problem_label);

    card_body.appendChild(team_members_div);
    card_body.appendChild(problem_div);
    // --- Body ---

    card.appendChild(card_header);
    card.appendChild(card_body);
    section.appendChild(card);
    let list = document.getElementById(insert_element_id);
    list.insertBefore(section, list.firstChild);
}