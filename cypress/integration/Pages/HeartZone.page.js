import { header } from '../Pages/Header.page'
const edit_hr_zone_locator = '.save-button-activate.button-change'
const hr_zone_btns_locator = '.btn-group > button'
const save_hr_zone_locator = '[ng-click="saveZones()"]'


const HEARTRATEZONE = 'Heart rate zones'

export const heartzone = {

    selectHeartZone(zone){
        //change Heart arte zone
        header.settings().click()
        cy.contains(HEARTRATEZONE).should('be.visible').click()
        cy.get(edit_hr_zone_locator).click()
        cy.get(hr_zone_btns_locator).each(($btn) => {
            if($btn.text() == zone){
                cy.wrap($btn).click()
            }
        })
        cy.get(save_hr_zone_locator).click()
        cy.get('#loading').should('not.be.visible')
        
    }

}