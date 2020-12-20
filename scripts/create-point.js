

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf")


    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUFs()


function getCities(event) {
    const citySelected = document.querySelector("select[name=city")
    const stateInput = document.querySelector("input[name=state")

    const ufValue = event.target.value

    const indexOfSelctedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelctedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelected.innerHTML = '<option value>Selecione a cidade</option>'
    citySelected.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelected.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelected.disabled = false

        })
}


document.querySelector("select[name=uf").addEventListener('change', getCities)

//Itens de Coleta 

const itemsToCollet = document.querySelectorAll('.items-grid li')

for (const item of itemsToCollet) {
    item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector('input[name=items]')

let selectedItems = []

function handleSelectedItem() {

    const itemLi = event.target

    //Add or Remove one class with JavaScript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // This will be true or false
        return itemFound
    })

    //If it is selected
    if (alreadySelected >= 0) {
        //Tackeout
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems

}