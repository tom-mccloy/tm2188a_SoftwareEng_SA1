// URL of the postcode API
const POSTCODE_API = "https://api.postcodes.io/postcodes/"

function clearOutput() {
    /**
     * Sets all the output fields, containing the 4 geographic pieces
     * of information to null
     */
    
    // Retrieving the 4 fields
    const labelCountry = document.getElementById("lbl-country");
    const labelConstituency = document.getElementById("lbl-constituency");
    const labelCouncil = document.getElementById("lbl-council");
    const labelWard = document.getElementById("lbl-ward");

    // Setting the fields to null
    labelCountry.innerText = "";
    labelConstituency.innerText = "";
    labelCouncil.innerText = "";
    labelWard.innerText = "";
}
function possiblePostcode(postcode) {
    /**
     * Checks if a strong could be a valid UK postcode.
     * It does so by checking if the right characters are
     * in the right place, using regular expressions
     * 
     * @param {string} postcode Possible postcode to be checked
     * 
     * @return {boolean} True if could be postcode, false otherwise
     */

    // Formatting the postcode by removing any white space characters
    let formattedPostcode = postcode.replace(/\s/g, "");

    // Creating a reguar express that checks is XX009KD
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

    // Checking if the postcode is valid
    let isPostcode = regex.test(formattedPostcode);
    return isPostcode;
}
  
function checkPostcode() {
    /**
     * The runner that is actioned when search postcode is actioned:
     * - Step 1: Does the input string have the correct format to be a postcode
     * - Step 2: Can this postcode be found in the postcode api
     */

    // Retrieving the input and output text 
    const inputText = document.getElementById('txt-postcode');

    // Retrieving the warning message and setting it to blank
    const lblWarning = document.getElementById('lbl-warning');
    lblWarning.innerText = "";

    // Checking if a valid postcode
    let isValid = possiblePostcode(inputText.value);

    // Checking if not a valid postcode, and if not, don't proceed
    if (! isValid) {

        // Putting a warning message on this
        lblWarning.innerText = "Not the right format for a UK postcode";
    
    // The postcode text is valid, so proceeding to send it to the API
    } else {

        getPostcode(inputText.value).then((result) => {
      
            // ... Checking for a valid postcode
            if (result) {
                viewOutput(result);
            } else {
                lblWarning.innerText = "Did not find this postcode.";
            }
        
        // Catching any API errors
        }).catch((error) => {
            lblWarning.innerText = 'Something went wrong. Check internet connections.';
        });
    }
}
function getPostcode(postcode) {
    /**
     * Retrieves geographic information about a postcode from
     * the postcode.io API. 
     * 
     * @param {String} postcode UK postcode
     * 
     */

    // Constructing the URL for the API call
    let fullURL = POSTCODE_API + postcode; 

    // Returning the full API call
    return fetch(fullURL)

        // ... formatting this as JSON
        .then(response => response.json())
    
        // ... checking the header to see if successful API call
        .then(result => {
            
            // ... if so, returning the result
            if (result.status === 200) {
                return result.result; 

            // ... else, throwing an error to indicate that unsuccessful API call
            } else {
                throw new Error(`Postcode API error: ${result.status}`);
            }
        })
        // ... catching unexpected errors (like network errors)
        .catch(error => {
                throw error; 
    });
}
function viewOutput(apiOutput) {
    /**
     * Shows the result of the API call
     * in the labels of the design
     * 
     * @param {object} apiOutput JSON returning from postcode.io
     */

    // Retrieving labels
    const labelCountry = document.getElementById("lbl-country");
    const labelConstituency = document.getElementById("lbl-constituency");
    const labelCouncil = document.getElementById("lbl-council");
    const labelWard = document.getElementById("lbl-ward");

    // Setting the fields to their correct values
    labelCountry.innerText = apiOutput['country'];
    labelConstituency.innerText = apiOutput['parliamentary_constituency'];
    labelCouncil.innerText = apiOutput['admin_district'];
    labelWard.innerText = apiOutput['admin_ward'];
    
}
// Exporting the postcode function for testing
module.exports = possiblePostcode;

