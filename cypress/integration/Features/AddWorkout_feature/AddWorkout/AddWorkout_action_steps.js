/// <reference types="Cypress" />
import { Given, When, And } from "cypress-cucumber-preprocessor/steps"
import { header } from '../../../Pages/Header.page'
import { registeredUser } from "../../../../constants/registeredUserInfo"
import { addWorkout } from "../../../Pages/AddWorkout.page"
import {heartzone} from "../../../Pages/HeartZone.page"

const WorkOutDetails = 'Workout details'

Given('user set Heart rate zones to Zone level {string}', (zone) => {
    cy.loginByForm(registeredUser.email, registeredUser.password)
    cy.visit('/#/home')
    heartzone.selectHeartZone(zone)
})

Given('user is on Add workout page', () => {
    cy.loginByForm(registeredUser.email, registeredUser.password)
    cy.visit('/#/home')
    header.addWorkaut().should('be.visible').click()
    cy.visit('#/workout/manual').then(() => {
        cy.url().should('contain', '/workout/manual');
    })
    cy.get('.workout-form-input').find('*:contains("'+WorkOutDetails+'")').should('be.visible')
})

When('user navigate to Add workout page', () => {
    //navigate to home page
    cy.visit('/#/home')
    header.addWorkaut().should('be.visible').click()
})

And('enter 1h for duration time', () => {
    addWorkout.duration().should('be.visible').clear().type('0100')
    addWorkout.distance().click()
})

When('user select Activity {string}', (activity) => {
    addWorkout.selectActivity(activity)
})

When('user select Add sport button', ()=>{
    addWorkout.addSport().should('be.visible').click()
})

When('user select Remove sport button', ()=>{
    addWorkout.removeSport().should('be.exist').click({force: true} )
})

When('user click on {string} button', (btn)=>{
    addWorkout.clickOnButton(btn).should('be.visible').click()
})



