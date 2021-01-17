# List Web App

A project I developed on the weekends. Fetching data are listed in a tabular form. More detailed information is shown on the right when the columns are clicked. Text-based data is taken from the **data.json** file located locally. The **unsplash** api was used for pictures. The **react-leaflet** was used to display the location on the map.

As next steps;

- User can take action for **action needed** parts.
- **data.json** file can be imported into a database.
- The information in the database can be changed via **take action** and **no action needed** buttons.
- Can be made suitable for mobile.
- Animation can be added.

### How to Run

1- Open terminal and then type

```
git clone https://github.com/mehdisolhan/list-web-app.git
```

2- `cd` into the new folder and type

```
npm install
```

This is required for dependencies

3- To run the project.

```
npm start
```

### Build Dependencies

- React: 17.0.1
- React-DOM: 17.0.1
- React-bootstrap: 1.4.0
- react-leaflet: 3.0.2
- moment: 2.29.1
- axios: 0.21.1
- bootstrap: 4.5.3

### API Service

unsplash

For documentation and api key, the following website was used;
https://unsplash.com/documentation

**_Unsplash API key was written in .env file. It is hidden._**
