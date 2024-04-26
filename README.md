# Software Engineering: Summative Assignment 1

## _Due: 26th April 2024_

### **1**: The proposed project
* **What?**: To create an easy to use postcode product that allows for key electoral and geographic information to be identified.
* **Why?**: When handling large datasets in SQL, it is easy to extract postcode information by joining the table of interest with the postcode lookup. However, our case managers are often interested in looking up a single postcode (perhaps for a college or idependent training provider). For this, there currently is not tool widely adopted in the department. The tool aims to be a reliable and easy-to-use tool for case managers to get postcode / geographic information.

### **2**: The design
* **Considerations**
> * **Colour palette**: All colours used within this design are from the GDS colour scheme. These have been chosen with accessibility in mind. They have high-contrast to ensure they are suitable for those with colour deficiency. Furthermore, they are designed to be bright so that even in sub-optimal lighting, they should remain visible. Colour codes are publicly [available](https://design-system.service.gov.uk/styles/colour/).
> * **Aspect ratio**: Employees within the department are issued a device from a narrow list of devices. Therefore, the frame used for the design was selected to have the same resolution and aspect ratio. This provides the most realistic representation of this app will look like.
> * **Components**: Within the GDS style guide, button are typically selected depending on the context of which they are used. This provides a consistent experience across all government products and users should intuively know what this Based on the GDS style guide, the default button was added to the design here. The rationale is this the button does not change the page but does perform the main action of this page - to lookup the postcode. 

| ![image](https://github.com/tom-mccloy/tm2188a_SoftwareEng_SA1/assets/162805077/73c07f33-ac08-44a0-95e8-264656db5349)
| :--: |
| **Figure 1**: High-fidelity of the postcode tool produced in Figma, and shown on a Macbook model that is a departmentally issued model |

#### **2.1**: Feedback collection
* To collect feedback on this initial design, a feedback form was used. The data collection was annonymous so that users have confidence to provide genuine feedback, without being worried out judgment.

Questions 1 - 2 | Question 3 - 4 
:-----:|:-----:
![image](https://github.com/tom-mccloy/tm2188a_SoftwareEng_SA1/assets/162805077/650e312b-2974-4f71-bee3-d926a2e056ac) | ![image](https://github.com/tom-mccloy/tm2188a_SoftwareEng_SA1/assets/162805077/1109901a-ccb3-4997-be95-c92f3bc73dff) |


#### **2.2**: Further improvements
* Whilst this document is principally concerned with the development of the a minimum viable product (MVP), the feedback shed light on improvements that should be considered for future improvements.
* These included:
> * Consider other device types. It is becoming increasingly common for front-line colleagues to work on the road and use their phones for tasks. Therefore, a mobile-optimised app would be useful.
> * It is common for colleagues to be multi-tasking and have two tabs side by side. Therefore, it would be useful to have a responsive layout that changes the layout from horizontal to vertical below a certain width. 

### **3**: Project planning

* **Project management methodology**: Agile
* **What is agile?**: It is a project management approach that puts focus emphasis on collaboration, flexibility and development iteratively. It is now considered the industry-standard for the majority of software development (with the possible exception of large-scale engineering contracts - like military systems). 
> * In a linear approach, the project progressed stage by stage. For example, the requirements are often robustly established and signed off before being able to proceed to the design section.
>   * The rigidity of the linear model means that the project is less able to change during its lifecycle.
* **Why agile is best here?**
> * By developing iteratively, it allows for me to focus on a given feature and check that is works and consider feedback from colleagues.
>* Furthermore, by focused on a given spring, it is widely thought to be more efficient as well. 

#### **3.1**: Requirements

* **Requirement**: A description of what software needs to do or be
> * **Functional requirement**: A focus on _what_ the software needs to be do. For instance, apply a filter to an image.
> * **Non-functional requirement**: A characteristic of the software, rather than what it needs to do.
* To aid with the management of the requirements, I used the GitHub projects tool. **Why**?
> * It is free to use. There exist many industry-standard tools, like Jira, that are pay-for-use.
> * It is helpful to be able to have GitHub as the repository for the code, along with the project management elements.
> * GitHub projects used **Kanban** (Figure 2). With the buckets for backlog, in-progress, reviewed and done, it is powerful to visualise how things are going with a project. Also, by having a backlog of requirements to achieve, it aligns with other Agile methodologies (like Scrum). 

| ![image](https://github.com/tom-mccloy/tm2188a_SoftwareEng_SA1/assets/162805077/a646b5ce-786e-4aab-bf34-eee9667a30c7) 
| :---: |
| **Figure 2**: Kanban board from GitHub Project during the process of completing the application |

#### **3.2**: Ticketing

* Each requirement corresponds to:
> * A feature.
> * A branch in the GitHub deployment
* Requirements are labelled with either:
> * **documentation**: This refers to tasks that pertain to updated the `README.md`
> * **UI design**: This are coding tasks relating to updating the HTNL / CSS files to create the user interface.
> * **backend development**: This refers to the underlying JavaScript that is responsible for the underlying logic of the website.
> * **testing**: All actions that check the application is working. Within the scope of this project, it will principally pertain to unit testing.
> * **deployment**: The act of pushing the website out to a new environment. This is GitHub pages where the website should be visible.

| ![image](https://github.com/tom-mccloy/tm2188a_SoftwareEng_SA1/assets/162805077/8e759127-381c-4255-b379-debcad9b2c75)
| :----: |
| **Figure 3**: Ticketing system in used - GitHub issues |


### **4**: The build of the MVP

#### **4.1**: The tech stack
* **Tech stack**: A collection of technologies used to both build and run a software application. It is typically made up of programming languages, frameworks, APIs and databases.
* Choosing a tech stack is an incredibly important early decision, as different stacks have relative benefits and suitability.
* What I've chosen:
> * **HTML**: A markup language that is the skeleton of a website. Different components are added to the web page through the use of tags. (i.e. `<h1>Text</h1>`)
> * **CSS**: These style sheets allow for the separation of the appearence of the website from its structure. In the CSS file, you specify how things should appear including fonts and positioning.
> * **JavaScript**: It is the programming language of the modern internet. It is a light-weight programming language that adds the dynamic and interactive elements to this page.
* **Why I've chosen this stack?**
> * These three languages are the universal language of the website. Therefore, it will be easy to deploy this application.
> * These technologies allow for the separation of structure, design and functionality. Therefore, it is easy to design your MVP in sections.

#### **4.2**: Postcode.io
* [Postcode.io](https://postcodes.io/) is an open-source API for UK geography.
* Also, it is regularly updated and early has the new Westminster constituencies for the 2024 election in place. Therefore, by using this API, I am able to have my geographic information updated without needed to update some persistent datastore - like a database - myself.
* **How to get postcode** information. The example GET command for this API is

```
https://api.postcodes.io/postcodes/CF243AA
```

* An example response from the API is shown below.

```
{
    "status":200,
    "result":{
        "postcode":"CF24 3AA",
        "quality":1,
        "eastings":318879,
        "northings":176831,
        "country":"Wales",
        "nhs_ha":"Cardiff and Vale University Health Board",
        "longitude":-3.169657,
        "latitude":51.484591,
        "european_electoral_region":"Wales",
        "primary_care_trust":"Cardiff and Vale University Health Board",
        "region":null,"lsoa":"Cardiff 033F",
        "msoa":"Cardiff 033",
        "incode":"3AA",
        "outcode":"CF24",
        "parliamentary_constituency":"Cardiff Central",
        "parliamentary_constituency_2024":"Cardiff East",
        "admin_district":"Cardiff",
        "parish":"Roath",
        "admin_county":null,
        "date_of_introduction":"199906",
        "admin_ward":"Plasnewydd",
        "ced":null,
        "ccg":"Cardiff and Vale University",
        "nuts":"Cardiff",
        "pfa":"South Wales",
        "codes":{
            "admin_district":"W06000015",
            "admin_county":"W99999999",
            "admin_ward":"W05001289",
            "parish":"W04000856"
        }
    }
}
```
* The fields of most use to the departmental needs are:
> * `country`: Nation of the UK
> * `parliamentary_constituency': Seat for the Westminster Parliament
> * 'admin_district': Council
> * 'admin_ward': Council ward

#### **4.3**: Creating the MVP
* **Step 1**: The HTML
> * Designing the structure of the website was the first step of this MVP
> * For this website, it is principally basic HTML elements in use, like headings, buttons, inputs and text fields.
**Step 2**: Design
> * For organising the fields in the forms (where postcode is inputted and responses viewed), a grid layout manager was used as it organises elements in a rigid pattern.
> * To have two separate boxes side by side, one for input and one for output, these were set to floating flexboxes. Whilst these have the right appearence, it may be necessary to look at other layout frameworks (such as React) to get the responsive nature of the website right later down the line.
> * One major benefit of prototyping with Figma is that you're able to export the CSS code for use. This can then be directly added to `index.css`
> * However, there are some elements where there are two instances but different styling - for example the buttons. To achieve this in CSS, I used multiple classes together (i.e. `.button .input`). The combination of these allowed for specialisation upon the basic button design.
* **Step 3**: JavaScript
> * Each item in the HTML is an object, hence the term document object model (DOM).
> * In my JavaScript, it was necessary to uniquely address items. First, a customisation to the HTML was needed by adding `id = "id-name"` to the opening tags of the elements. Then, without the JavaScript code, their properties can be got and set with:

```
document.getElementById("id-name")
```
> * Retrieving data from the API is a commonly done thing in JavaScript and I used the following [tutorial](https://www.w3schools.com/jsref/api_fetch.asp) with minor modifications for this effect. 


### **5**: Test-driven development
* Testing is an incredibly important part of the software development life cycle (SDLC) and often takes more time than the inital coding of the product itself.
* **Why is testing important?**
> * By identifying bugs and errors you improve the experience of the product for your customer and ensure things work as they should.
> * When performing testing, you may identify areas of weaker performance. This may be clunky functionality or slow performance. This can lead to improvements in this area.
> * It is also important to test the security of the product as well.
* **Test driven development**: In essence, this flips the process round of coding then testing. Tests are created ahead of time, and it encourages the developer to thing of edge cases where their code might fail. Therefore, by meeting these tests, the given functionality should perform as expected.
* The steps to carry out test-driven development are:
> * Write a failing test. This is often performed on a method with minimal implementation and is there as an initial smoke test.
>  * The least code necessary to pass the test is then written.
>  * Refactoring takes place to ensure that the code is easy to interpret and isn't too computationally intensive.
>  * Repeat this process on the remainder of the tests, where the stringency or complexity of the test conditions increases. Thus, you produce a robust piece of code.
* **Unit test**: Unit testing focuses on verifying the functionality of an individual unit of code. An example might be a single method. A unit test is often the starting point for test-driven development, as it allows you to focus on targeting a particular piece of functionality.
> * A big benefit of unit testing is that you are identifying bugs in code early on. This is when they are easiest to fix.

#### **5.1**: `possiblePostcode`
* The section of code tested as part of a unit test is a method called `possiblePostcode`
* **Purpose**: To weed out postcodes that do not meet the standard of a UK postcode. It prevents an API call being sent for an input that is clearly not valid.
* **Jest**: For all the tests, the popular JavaScript framework, Jest, was used. It allows for the testing of a method with minimal prior configuration.

##### **5.1.1**: Set up
* **Installation**. It is assume that `Node.js` and its associated package manager `npm` is already installed. In the terminal, `jest` needs to be installed.

```
npm install --save-dev jest
```
* **Updating the config file**: If a `package.json` file is not already created, you should do. Within this file, the following section needs adding.

```
{
  "scripts": {
    "test": "jest"
  }
}
```
* **Exporting the method**: Under test here is the method `possiblePostcode` (contained within `index.js`. For use by Jest, this needs to be exported. To do so, the following line needs to be added at the end of the `index.js` file.

```
module.exports = possiblePostcode;
```
* **Importing the method**: Tests were created in a test file. This is denoted by the filename itself and here was named `index.test.js`. At the top, the previously exported method was imported.

```
const possiblePostcode = require(./index.js');
```
* This method should:
> * Return `false` if there is no way that this is valid postcode.
> * Return `true` if it does have the format of a valid postcode.
* Therefore, I am going to use a method that checks the returned value. For a valid postcode, a test would be:

```
expect(possiblePostcode('CF10 3NB)).toBe(true);
```
* The ascending ladder of tests used for TDD were:
> * A postcode should contain one or more characters that aren't white space or carriage return etc., th
> * The first one or two characters of the outcode should be alphabetic.
> * After the initial alphabetic characters of the outcode should be a number.
> * The first letter of the inward code should be a number.
> * The final two letters of a postcode should be two alphabetic characters.
* By considering a set of postcodes for each requirement, the test was shown to have passed on the final iteration.

| ![image](https://github.com/tom-mccloy/tm2188a_SoftwareEng_SA1/assets/162805077/fa2d380a-c5f2-46c6-ba98-4c9611a2b15c)
| :----: |
| **Figure 4**: Output in the terminal of Jest unit tests on `possiblePostcode` |

### **6**: Creation of the MVP

### **7**: Evaluation
