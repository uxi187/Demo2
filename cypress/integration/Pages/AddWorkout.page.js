
const slider_locator = '.slider-wrapper > .ng-pristine > .d3-slider-handle'
const zone_1_percentage_locator = '.zone.zone-0 .zone-value-label'
const zone_1_time_locator = '.zone.zone-0 .slider-zone-label'
const zone_2_percentage_locator = '.zone.zone-1 .zone-value-label'
const zone_2_time_locator = '.zone.zone-1 .slider-zone-label'
const zone_3_percentage_locator = '.zone.zone-2 .zone-value-label'
const zone_3_time_locator = '.zone.zone-2 .slider-zone-label'
const zone_4_percentage_locator = '.zone.zone-3 .zone-value-label'
const zone_4_time_locator = '.zone.zone-3 .slider-zone-label'
const zone_5_percentage_locator = '.zone.zone-4 .zone-value-label'
const zone_5_time_locator = '.zone.zone-4 .slider-zone-label'
const zone_6_percentage_locator = '.zone.zone-5 .zone-value-label'
const zone_6_time_locator = '.zone.zone-5 .slider-zone-label'
const zone_7_percentage_locator = '.zone.zone-6 .zone-value-label'
const zone_7_time_locator = '.zone.zone-6 .slider-zone-label'
const zone_8_percentage_locator = '.zone.zone-7 .zone-value-label'
const zone_8_time_locator = '.zone.zone-7 .slider-zone-label'
const zone_9_percentage_locator = '.zone.zone-8 .zone-value-label'
const zone_9_time_locator = '.zone.zone-8 .slider-zone-label'
const zone_10_percentage_locator = '.zone.zone-9 .zone-value-label'
const zone_10_time_locator = '.zone.zone-9 .slider-zone-label'

const add_sport_locator = '.action-link'
const datepicker_locator = '.datepickerValue.hasDatepicker'

const DATE = 'Date'
const DURATION = 'Duration'
const DISTANCE = 'Distance'
const ACTIVITY = 'Activity'
const MODE = 'Mode'
const ADDPARAMETER = 'Add parameter'
const TIME = 'Time'
const REMOVESPORT = 'Remove sport'


export const addWorkout = {

    duration() {
        return cy.contains(DURATION).siblings('span.workout-form-input').find('input')
    },

    distance() {
        return cy.contains(DISTANCE).siblings('span.workout-form-input').find('input')
    },

    getInputElements(field) {
        return cy.contains('' + field + '').siblings('span.workout-form-input').find('input')
    },

    zone1percenatge() {
        return cy.get(zone_1_percentage_locator)
    },

    validateZonesPercentage(zone1, zone2, zone3, zone4, zone5, zone6, zone7, zone8, zone9, zone10) {
        if (zone1 != undefined) {
            cy.get(zone_1_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone1)
            })
        }
        if (zone2 != undefined) {
            cy.get(zone_2_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone2)
            })
        }
        if (zone3 != undefined) {
            cy.get(zone_3_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone3)
            })
        }
        if (zone4 != undefined) {
            cy.get(zone_4_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone4)
            })
        }
        if (zone5 != undefined) {
            cy.get(zone_5_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone5)
            })
        }
        if (zone6 != undefined) {
            cy.get(zone_6_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone6)
            })
        }
        if (zone7 != undefined) {
            cy.get(zone_7_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone7)
            })
        }
        if (zone8 != undefined) {
            cy.get(zone_8_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone8)
            })
        }
        if (zone9 != undefined) {
            cy.get(zone_9_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone9)
            })
        }
        if (zone10 != undefined) {
            cy.get(zone_10_percentage_locator).should(($percentage) => {
                expect($percentage.text().match('[0-9]+')[0]).to.equals(zone10)
            })
        }
    },

    modeDropdown() {
        return cy.get('.workout-form-row').find('label*:contains("' + MODE + '")').siblings('span.workout-form-input').find('a')
    },

    selectActivity(activity) {
        cy.contains(ACTIVITY).siblings('span.workout-form-input').find('a').should('be.visible').click()
        cy.contains(ACTIVITY).siblings('span.workout-form-input').find('a').next('ul.dropdown-menu').find('li').should('be.visible').each(($element) => {
            if ($element.text() === activity) {
                cy.wrap($element).click({ force: true })
            }
        })
    },

    getAddParametersOptions(parameter) {
        return cy.contains(ADDPARAMETER, {timeout : 10000}).siblings('span.workout-form-input').find('div.toggle-buttons').find('li', {timeout:10000}).then(($li) => {
            expect($li.text()).to.include(parameter)
        })
    },

    validateAddParameters(parameter1, parameter2, parameter3, parameter4) {

        if (parameter1 != "") {
            this.getAddParametersOptions(parameter1)
        }
        if (parameter2 != "") {
            this.getAddParametersOptions(parameter2)
        }
        if (parameter3 != "") {
            this.getAddParametersOptions(parameter3)
        }
        if (parameter4 != "") {
            this.getAddParametersOptions(parameter4)
        }
    },

    addSport() {
        return cy.get(add_sport_locator)
    },

    removeSport() {
        return cy.contains(REMOVESPORT)
    },

    validateAddSportForm(label) {
        return cy.get('.workout-form-row').find('*:contains("' + label + '")')
    },

    getDate() {
        return cy.contains(DATE).siblings('span.workout-form-input').then(($el) => {
            return $el.find(datepicker_locator).val()
        })
    },

    getTime() {
        return cy.contains(TIME).siblings('span.workout-form-input').then(($el) => {
            return $el.find('input').val()
        })
    },

    clickOnButton(btn) {
        return cy.contains(btn)
    },

    moveSliderToPosition(position) {
        switch (position) {
            case "1":
                moveToPosition1()
                break;
            case "2":
                moveToPosition2()
                break;
            case "3":
                moveToPosition3()
                break;
            case "4":
                moveToPosition4()
                break;
            case "5":
                moveToPosition5()
                break;
            case "6":
                moveToPosition6()
                break;
            case "7":
                moveToPosition7()
                break;
            case "8":
                moveToPosition8()
                break;
            case "9":
                moveToPosition9()
                break;
            case "10":
                moveToPosition10()
                break;
        }
    },

    validateZonesTime(zone1, zone2, zone3, zone4, zone5, zone6, zone7, zone8, zone9, zone10){
        if (zone1 != undefined) {
            let timecalculation = '01:00:00'
            if(zone1!=0 && zone1!=100){
                timecalculation = (zone1/100 * 60)<10 ? timecalculation =`00:0${zone1/100 * 60}:00` : timecalculation=`00:${zone1/100 * 60}:00`
            }
            cy.get(zone_1_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone2 != undefined && zone2 != 0) {
            let timecalculation = (zone2/100 * 60)<10 ? timecalculation =`00:0${zone2/100 * 60}:00` : timecalculation=`00:${zone2/100 * 60}:00`
            cy.get(zone_2_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone3 != undefined && zone3 != 0) {
            let timecalculation = (zone3/100 * 60)<10 ? timecalculation =`00:0${zone3/100 * 60}:00` : timecalculation=`00:${zone3/100 * 60}:00`
            cy.get(zone_3_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone4 != undefined && zone4 != 0) {
            let timecalculation = (zone4/100 * 60)<10 ? timecalculation =`00:0${zone4/100 * 60}:00` : timecalculation=`00:${zone4/100 * 60}:00`
            cy.get(zone_4_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone5 != undefined && zone5 != 0) {
            let timecalculation = (zone5/100 * 60)<10 ? timecalculation =`00:0${zone5/100 * 60}:00` : timecalculation=`00:${zone5/100 * 60}:00`
            cy.get(zone_5_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone6 != undefined && zone6 != 0) {
            let timecalculation = (zone6/100 * 60)<10 ? timecalculation =`00:0${zone6/100 * 60}:00` : timecalculation=`00:${zone6/100 * 60}:00`
            cy.get(zone_6_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone7 != undefined && zone7 != 0) {
            let timecalculation = (zone7/100 * 60)<10 ? timecalculation =`00:0${zone7/100 * 60}:00` : timecalculation=`00:${zone7/100 * 60}:00`
            cy.get(zone_7_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone8 != undefined && zone8 != 0) {
            let timecalculation = (zone8/100 * 60)<10 ? timecalculation =`00:0${zone8/100 * 60}:00` : timecalculation=`00:${zone8/100 * 60}:00`
            cy.get(zone_8_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone9 != undefined && zone9 != 0) {
            let timecalculation = (zone9/100 * 60)<10 ? timecalculation =`00:0${zone9/100 * 60}:00` : timecalculation=`00:${zone9/100 * 60}:00`
            cy.get(zone_9_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
        if (zone10 != undefined && zone10 != 0) {
            let timecalculation = (zone10/100 * 60)<10 ? timecalculation =`00:0${zone10/100 * 60}:00` : timecalculation=`00:${zone10/100 * 60}:00`
            cy.get(zone_10_time_locator).should(($time) => {
                expect($time).to.be.visible
                expect($time.text()).to.equals(timecalculation)
            })
        }
    }

}

function moveToPosition1() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 })
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}

function moveToPosition2() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}
function moveToPosition3() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 234, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}
function moveToPosition4() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 234, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 264, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}
function moveToPosition5() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 234, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 264, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 294, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 314, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}

function moveToPosition6() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 234, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 264, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 294, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 324, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 354, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}

function moveToPosition7() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 234, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 264, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 294, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 324, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 354, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 384, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}

function moveToPosition8() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 234, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 264, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 294, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 324, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 354, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 384, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 414, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}
function moveToPosition9() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 234, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 264, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 294, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 324, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 354, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 384, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 414, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 444, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}
function moveToPosition10() {
    cy.window().then((win) => {
        cy.get(slider_locator).should('be.visible')
            .trigger('mousedown', { which: 1, force: true, view: win })
            .trigger('mousemove', { clientX: 174, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 204, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 234, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 264, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 294, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 324, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 354, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 384, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 414, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 444, clientY: 87 }, {timeout:500})
            .trigger('mousemove', { clientX: 474, clientY: 87 }, {timeout:500})
            .trigger('mouseup', { which: 1, force: true, view: win })
    })
}

