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


### **4**: Project planning

### **5**: Test-driven development

### **6**: Creation of the MVP

### **7**: Evaluation
