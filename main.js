// Implement NPM package 'readline-sync':
var rs = require('readline-sync');

// Initiate totalScore variable to track score throughout the quiz:
let totalScore = 0;

// Master function:
const masterFunction = () => {
    // Greet the user:
    console.log('Hello, welcome to the Capitals Quiz. Let\'s get started!');

    // Function to ask for capital of each state (to be displayed above options):
    const askState = (state) => {
        console.log(`What is the capital of ${state}?`);
    }

    // FUNCTIONS TO GIVE MULTIPLE-CHOICE QUESTION ABOUT EACH STATE'S CAPITAL:
    // Alabama:
    const getAlabama = () => {
        askState('Alabama');
        let rs = require('readline-sync'),
        cities = ['Huntsville', 'Tuscaloosa', 'Mobile', 'Montgomery'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Montgomery') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 1.`);
        } else if (cities[index] === 'Huntsville' || cities[index] === 'Tuscaloosa' || cities[index] === 'Mobile') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 1.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getAlabama();

    // Alaska:
    const getAlaska = () => {
        askState('Alaska');
        let rs = require('readline-sync'),
        cities = ['Anchorage', 'Juneau', 'Barrow', 'Sitka'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Juneau') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 2.`);
        } else if (cities[index] === 'Anchorage' || cities[index] === 'Barrow' || cities[index] === 'Sitka') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 2.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getAlaska();

    // Arizona:
    const getArizona = () => {
        askState('Arizona');
        let rs = require('readline-sync'),
        cities = ['Phoenix', 'Yuma', 'Sedona', 'Tucson'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Phoenix') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 3.`);
        } else if (cities[index] === 'Yuma' || cities[index] === 'Sedona' || cities[index] === 'Tucson') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 3.`);
        } else {
            console.log('You have canceled the quiz.');
            return masterFunction();
        }
    }
    getArizona();

    // Arkansas:
    const getArkansas = () => {
        askState('Arkansas');
        let rs = require('readline-sync'),
        cities = ['Texarkana', 'Eureka Springs', 'Springdale', 'Little Rock'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Little Rock') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 4.`);
        } else if (cities[index] === 'Texarkana' || cities[index] === 'Eureka Springs' || cities[index] === 'Springdale') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 4.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getArkansas();

    // California
    const getCalifornia = () => {
        askState('California');
        let rs = require('readline-sync'),
        cities = ['Los Angeles', 'San Diego', 'San Francisco', 'Sacramento'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Sacramento') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 5.`);
        } else if (cities[index] === 'Los Angeles' || cities[index] === 'San Diego' || cities[index] === 'San Francisco') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 5.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getCalifornia();

    // Colorado
    const getColorado = () => {
        askState('Colorado');
        let rs = require('readline-sync'),
        cities = ['Colorado Springs', 'Denver', 'Loveland', 'Fort Collins'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Denver') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 6.`);
        } else if (cities[index] === 'Colorado Springs' || cities[index] === 'Loveland' || cities[index] === 'Fort Collins') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 6.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getColorado();

    // Connecticut
    const getConnecticut = () => {
        askState('Connecticut');
        let rs = require('readline-sync'),
        cities = ['Fairfield', 'Bristol', 'Hartford', 'Stamford'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Hartford') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 7.`);
        } else if (cities[index] === 'Fairfield' || cities[index] === 'Bristol' || cities[index] === 'Stamford') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 7.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getConnecticut();

    // Delaware
    const getDelaware = () => {
        askState('Delaware');
        let rs = require('readline-sync'),
        cities = ['Dover', 'Fenwick Island', 'Delaware City', 'Cheswold'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Dover') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 8.`);
        } else if (cities[index] === 'Fenwick Island' || cities[index] === 'Delaware City' || cities[index] === 'Cheswold') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 8.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getDelaware();

    // Florida
    const getFlorida = () => {
        askState('Florida');
        let rs = require('readline-sync'),
        cities = ['Tallahassee', 'Gainesville', 'Miami', 'Orlando'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Tallahassee') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 9.`);
        } else if (cities[index] === 'Gainesville' || cities[index] === 'Miami' || cities[index] === 'Orlando') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 9.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getFlorida();

    // Georgia
    const getGeorgia = () => {
        askState('Georgia');
        let rs = require('readline-sync'),
        cities = ['Atlanta', 'Athens', 'Savannah', 'Macon'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Atlanta') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 10.`);
        } else if (cities[index] === 'Athens' || cities[index] === 'Savannah' || cities[index] === 'Macon') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 10.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getGeorgia();

    // Hawaii
    const getHawaii = () => {
        askState('Hawaii')
        let rs = require('readline-sync'),
        cities = ['Honolulu', 'Kailua', 'Pearl City', 'Pakala'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Honolulu') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 11.`);
        } else if (cities[index] === 'Kailua' || cities[index] === 'Pearl City' || cities[index] === 'Pakala') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 11.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getHawaii();

    // Idaho
    const getIdaho = () => {
        askState('Idaho');
        let rs = require('readline-sync'),
        cities = ['Twin Falls', 'Idaho Falls', 'Meridian', 'Boise'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Boise') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 12.`);
        } else if (cities[index] === 'Twin Falls' || cities[index] === 'Idaho Falls' || cities[index] === 'Meridian') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 12.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getIdaho();

    // Illinois
    const getIllinois = () => {
        askState('Illinois');
        let rs = require('readline-sync'),
        cities = ['Chicago', 'Springfield', 'Aurora', 'Joliet'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Springfield') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 13.`);
        } else if (cities[index] === 'Chicago' || cities[index] === 'Aurora' || cities[index] === 'Joliet') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 13.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getIllinois();

    // Indiana
    const getIndiana = () => {
        askState('Indiana');
        let rs = require('readline-sync'),
        cities = ['South Bend', 'Indianapolis', 'Bloomington', 'Gary'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Indianapolis') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 14.`);
        } else if (cities[index] === 'South Bend' || cities[index] === 'Bloomington' || cities[index] === 'Gary') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 14.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getIndiana();

    // Iowa
    const getIowa = () => {
        askState('Iowa');
        let rs = require('readline-sync'),
        cities = ['Davenport', 'Ames', 'Des Moines', 'Iowa City'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Des Moines') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 15.`);
        } else if (cities[index] === 'Davenport' || cities[index] === 'Ames' || cities[index] === 'Iowa City') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 15.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getIowa();

    // Kansas
    const getKansas = () => {
        askState('Kansas');
        let rs = require('readline-sync'),
        cities = ['Topeka', 'Kansas City', 'Wichita', 'Lawrence'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Topeka') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 16.`);
        } else if (cities[index] === 'Kansas City' || cities[index] === 'Wichita' || cities[index] === 'Lawrence') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 16.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getKansas();

    // Kentucky
    const getKentucky = () => {
        askState('Kentucky');
        let rs = require('readline-sync'),
        cities = ['Louisville', 'Lexington', 'Bowling Green', 'Frankfort'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Frankfort') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 17.`);
        } else if (cities[index] === 'Louisville' || cities[index] === 'Lexington' || cities[index] === 'Bowling Green') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 17.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getKentucky();

    // Louisiana
    const getLouisiana = () => {
        askState('Louisiana');
        let rs = require('readline-sync'),
        cities = ['Baton Rouge', 'New Orleans', 'Shreveport', 'Monroe'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Baton Rouge') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 18.`);
        } else if (cities[index] === 'New Orleans' || cities[index] === 'Shreveport' || cities[index] === 'Monroe') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 18.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getLouisiana();

    // Maine
    const getMaine = () => {
        askState('Maine');
        let rs = require('readline-sync'),
        cities = ['Bangor', 'Augusta', 'Portland', 'Biddeford'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Augusta') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 19.`);
        } else if (cities[index] === 'Bangor' || cities[index] === 'Portland' || cities[index] === 'Biddeford') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 19.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getMaine();

    // Maryland
    const getMaryland = () => {
        askState('Maryland');
        let rs = require('readline-sync'),
        cities = ['Annapolis', 'Baltimore', 'Gaithersburg', 'Rockville'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Annapolis') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 20.`);
        } else if (cities[index] === 'Baltimore' || cities[index] === 'Gaithersburg' || cities[index] === 'Rockville') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 20.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getMaryland();

    // Massachusetts
    const getMassachusetts = () => {
        askState('Massachusetts');
        let rs = require('readline-sync'),
        cities = ['Cape Cod', 'Cambridge', 'Boston', 'Springfield'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Boston') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 21.`);
        } else if (cities[index] === 'Cape Cod' || cities[index] === 'Cambridge' || cities[index] === 'Springfield') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 21.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getMassachusetts();

    // Michigan
    const getMichigan = () => {
        askState('Michigan');
        let rs = require('readline-sync'),
        cities = ['Grand Rapids', 'Detroit', 'Muskegon', 'Lansing'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Lansing') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 22.`);
        } else if (cities[index] === 'Grand Rapids' || cities[index] === 'Detroit' || cities[index] === 'Muskegon') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 22.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getMichigan();

    // Minnesota
    const getMinnesota = () => {
        askState('Minnesota');
        let rs = require('readline-sync'),
        cities = ['Saint Paul', 'Minneapolis', 'Rochester', 'Duluth'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Saint Paul') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 23.`);
        } else if (cities[index] === 'Minneapolis' || cities[index] === 'Rochester' || cities[index] === 'Duluth') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 23.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getMinnesota();

    // Mississippi
    const getMississippi = () => {
        askState('Mississippi');
        let rs = require('readline-sync'),
        cities = ['Gulfport', 'Hattiesburg', 'Biloxi', 'Jackson'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Jackson') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 24.`);
        } else if (cities[index] === 'Gulfport' || cities[index] === 'Hattiesburg' || cities[index] === 'Biloxi') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 24.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getMississippi();

    // Missouri
    const getMissouri = () => {
        askState('Missouri');
        let rs = require('readline-sync'),
        cities = ['Saint Louis', 'Jefferson City', 'Springfield', 'Independence'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Jefferson City') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 25.`);
        } else if (cities[index] === 'Saint Louis' || cities[index] === 'Springfield' || cities[index] === 'Independence') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 25.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getMissouri();

    // Montana
    const getMontana = () => {
        askState('Montana');
        let rs = require('readline-sync'),
        cities = ['Helena', 'Missoula', 'Billings', 'Bozeman'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Helena') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 26.`);
        } else if (cities[index] === 'Missoula' || cities[index] === 'Billings' || cities[index] === 'Bozeman') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 26.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getMontana();

    // Nebraska
    const getNebraska = () => {
        askState('Nebraska');
        let rs = require('readline-sync'),
        cities = ['Lincoln', 'Omaha', 'Bellevue', 'North Platte'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Lincoln') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 27.`);
        } else if (cities[index] === 'Omaha' || cities[index] === 'Bellevue' || cities[index] === 'North Platte') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 27.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getNebraska();

    // Nevada
    const getNevada = () => {
        askState('Nevada');
        let rs = require('readline-sync'),
        cities = ['Reno', 'Las Vegas', 'Carson City', 'Sparks'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Carson City') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 28.`);
        } else if (cities[index] === 'Reno' || cities[index] === 'Las Vegas' || cities[index] === 'Sparks') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 28.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getNevada();

    // New Hampshire
    const getNewHampshire = () => {
        askState('New Hampshire')
        let rs = require('readline-sync'),
        cities = ['Concord', 'Nashua', 'Manchester', 'Portsmouth'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Concord') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 29.`);
        } else if (cities[index] === 'Nashua' || cities[index] === 'Manchester' || cities[index] === 'Portsmouth') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 29.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getNewHampshire();

    // New Jersey
    const getNewJersey = () => {
        askState('New Jersey');
        let rs = require('readline-sync'),
        cities = ['Trenton', 'Jersey City', 'Newark', 'Atlantic City'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Trenton') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 30.`);
        } else if (cities[index] === 'Jersey City' || cities[index] === 'Newark' || cities[index] === 'Atlantic City') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 30.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getNewJersey();

    // New Mexico
    const getNewMexico = () => {
        askState('New Mexico');
        let rs = require('readline-sync'),
        cities = ['Albuquerque', 'Santa Fe', 'Los Alamos', 'Las Cruces'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Santa Fe') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 31.`);
        } else if (cities[index] === 'Albuquerque' || cities[index] === 'Los Alamos' || cities[index] === 'Las Cruces') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 31.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getNewMexico();

    // New York
    const getNewYork = () => {
        askState('New York');
        let rs = require('readline-sync'),
        cities = ['Albany', 'Buffalo', 'New York City', 'Syracuse'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Albany') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 32.`);
        } else if (cities[index] === 'Buffalo' || cities[index] === 'New York City' || cities[index] === 'Syracuse') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 32.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getNewYork();

    // North Carolina
    const getNorthCarolina = () => {
        askState('North Carolina');
        let rs = require('readline-sync'),
        cities = ['Raleigh', 'Charlotte', 'Durham', 'Chapel Hill'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Raleigh') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 33.`);
        } else if (cities[index] === 'Charlotte' || cities[index] === 'Durham' || cities[index] === 'Chapel Hill') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 33.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getNorthCarolina();

    // North Dakota
    const getNorthDakota = () => {
        askState('North Dakota');
        let rs = require('readline-sync'),
        cities = ['Bismarck', 'Fargo', 'Grand Forks', 'Mandan'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Bismarck') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 34.`);
        } else if (cities[index] === 'Fargo' || cities[index] === 'Grand Forks' || cities[index] === 'Mandan') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 34.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getNorthDakota();

    // Ohio
    const getOhio = () => {
        askState('Ohio');
        let rs = require('readline-sync'),
        cities = ['Columbus', 'Cincinnati', 'Cleveland', 'Youngstown'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Columbus') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 35.`);
        } else if (cities[index] === 'Cincinnati' || cities[index] === 'Cleveland' || cities[index] === 'Youngstown') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 35.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getOhio();

    // Oklahoma
    const getOklahoma = () => {
        askState('Oklahoma');
        let rs = require('readline-sync'),
        cities = ['Stillwater', 'Tulsa', 'Oklahoma City', 'Norman'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Oklahoma City') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 36.`);
        } else if (cities[index] === 'Stillwater' || cities[index] === 'Tulsa' || cities[index] === 'Norman') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 36.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getOklahoma();

    // Oregon
    const getOregon = () => {
        askState('Oregon');
        let rs = require('readline-sync'),
        cities = ['Portland', 'Salem', 'Eugene', 'Beaverton'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Salem') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 37.`);
        } else if (cities[index] === 'Portland' || cities[index] === 'Eugene' || cities[index] === 'Beaverton') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 37.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getOregon();

    // Pennsylvania
    const getPennsylvania = () => {
        askState('Pennsylvania');
        let rs = require('readline-sync'),
        cities = ['Pittsburgh', 'Philadelphia', 'Harrisburg', 'Allentown'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Harrisburg') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 38.`);
        } else if (cities[index] === 'Pittsburgh' || cities[index] === 'Philadelphia' || cities[index] === 'Allentown') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 38.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getPennsylvania();

    // Rhode Island
    const getRhodeIsland = () => {
        askState('Rhode Island');
        let rs = require('readline-sync'),
        cities = ['Pawtucket', 'Warwick', 'Cranston', 'Providence'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Providence') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 39.`);
        } else if (cities[index] === 'Pawtucket' || cities[index] === 'Warwick' || cities[index] === 'Cranston') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 39.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getRhodeIsland();

    // South Carolina
    const getSouthCarolina = () => {
        askState('South Carolina');
        let rs = require('readline-sync'),
        cities = ['Columbia', 'Myrtle Beach', 'Charleston', 'Greenville'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Columbia') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 40.`);
        } else if (cities[index] === 'Myrtle Beach' || cities[index] === 'Charleston' || cities[index] === 'Greenville') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 40.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getSouthCarolina();

    // South Dakota
    const getSouthDakota = () => {
        askState('South Dakota');
        let rs = require('readline-sync'),
        cities = ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Pierre'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Pierre') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 41.`);
        } else if (cities[index] === 'Sioux Falls' || cities[index] === 'Rapid City' || cities[index] === 'Aberdeen') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 41.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getSouthDakota();

    // Tennessee
    const getTennessee = () => {
        askState('Tennessee');
        let rs = require('readline-sync'),
        cities = ['Memphis', 'Nashville', 'Chattanooga', 'Knoxville'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Nashville') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 42.`);
        } else if (cities[index] === 'Memphis' || cities[index] === 'Chattanooga' || cities[index] === 'Knoxville') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 42.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getTennessee();

    // Texas
    const getTexas = () => {
        askState('Texas');
        let rs = require('readline-sync'),
        cities = ['San Antonio', 'Dallas', 'Austin', 'Galveston'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Austin') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 43.`);
        } else if (cities[index] === 'San Antonio' || cities[index] === 'Dallas' || cities[index] === 'Galveston') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 43.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getTexas();

    // Utah
    const getUtah = () => {
        askState('Utah');
        let rs = require('readline-sync'),
        cities = ['Provo', 'Salt Lake City', 'West Jordan', 'American Fork'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Salt Lake City') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 44.`);
        } else if (cities[index] === 'Provo' || cities[index] === 'West Jordan' || cities[index] === 'American Fork') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 44.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getUtah();

    // Vermont
    const getVermont = () => {
        askState('Vermont');
        let rs = require('readline-sync'),
        cities = ['Burlington', 'Montpelier', 'Rutland', 'Essex'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Montpelier') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 45.`);
        } else if (cities[index] === 'Burlington' || cities[index] === 'Rutland' || cities[index] === 'Essex') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 45.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getVermont();

    // Virginia
    const getVirginia = () => {
        askState('Virginia');
        let rs = require('readline-sync'),
        cities = ['Virginia Beach', 'Chesapeake', 'Richmond', 'Norfolk'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Richmond') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 46.`);
        } else if (cities[index] === 'Virginia Beach' || cities[index] === 'Chesapeake' || cities[index] === 'Norfolk') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 46.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getVirginia();

    // Washington
    const getWashington = () => {
        askState('Washington');
        let rs = require('readline-sync'),
        cities = ['Seattle', 'Spokane', 'Olympia', 'Tacoma'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Olympia') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 47.`);
        } else if (cities[index] === 'Seattle' || cities[index] === 'Spokane' || cities[index] === 'Tacoma') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 47.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getWashington();

    // West Virginia
    const getWestVirginia = () => {
        askState('West Virginia')
        let rs = require('readline-sync'),
        cities = ['Morgantown', 'Charleston', 'Clarksburg', 'Parkersburg'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Charleston') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 48.`);
        } else if (cities[index] === 'Morgantown' || cities[index] === 'Clarksburg' || cities[index] === 'Parkersburg') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 48.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getWestVirginia();

    // Wisconsin
    const getWisconsin = () => {
        askState('Wisconsin');
        let rs = require('readline-sync'),
        cities = ['Green Bay', 'Milwaukee', 'Madison', 'Fond du Lac'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Madison') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 49.`);
        } else if (cities[index] === 'Green Bay' || cities[index] === 'Milwaukee' || cities[index] === 'Fond du Lac') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 49.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getWisconsin();

    // Wyoming
    const getWyoming = () => {
        askState('Wyoming');
        let rs = require('readline-sync'),
        cities = ['Jackson', 'Cheyenne', 'Laramie', 'Gillette'],
        index = rs.keyInSelect(cities, 'Please select an option, or select "0" to cancel the quiz.');
        if (cities[index] === 'Cheyenne') {
            totalScore += 1;
            console.log(`That's correct! Total score so far is ${totalScore} / 50.`);
        } else if (cities[index] === 'Jackson' || cities[index] === 'Laramie' || cities[index] === 'Gillette') {
            totalScore += 0;
            console.log(`Nope! Total score so far is ${totalScore} / 50.`);
        } else {
            console.log("You have canceled the quiz.");
            return masterFunction();
        }
    }
    getWyoming();

    // Display results:
    if (totalScore === 50) {
        console.log("Wow, you got a perfect score!");
    } else if (totalScore >= 40 && totalScore <= 49) {
        console.log(`That was pretty good! Your score is ${totalScore} out of 50.`);
    } else if (totalScore >= 30 && totalScore <= 39) {
        console.log(`You did alright. Your score is ${totalScore} out of 50.`);
    } else if (totalScore >= 20 && totalScore <= 29) {
        console.log(`Not horrible. Your score is ${totalScore} out of 50.`);
    } else if (totalScore >= 10 && totalScore <= 19) {
        console.log(`Could definitely be better. Your score is ${totalScore} out of 50.`)
    } else {
        console.log(`That was pretty bad, to put it bluntly. Your score was ${totalScore} out of 50.`)
    }
}
masterFunction();