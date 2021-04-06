class Card {
    constructor(out, q_arr, id) {
        this.id = id;
        this.q_arr = q_arr;
        this.chooesed_q = 0;

        let radio = '';
        for (let i = 1; i < q_arr.length; i++) {
            radio += `<input type='radio' name=${this.id} value='${q_arr[i]}' id=${this.id}_${i} > <label class='card-text' for=${this.id}_${i}> ${q_arr[i]}</label><br>`
        }
        out.innerHTML += `<div class="card my-3 border border-secondary" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title"> 
                                    ${q_arr[0]}
                                </h5>
                                ${radio}
                            </div>
                        </div>`;
    }
}

function loadCaards() {
    let out = document.querySelector('.cardspace');
    let card_ = [];
    for (let i = 0; i < questions.length; i++) {
        card_[i] = new Card(out, questions[i], i);
    }

};
loadCaards();