sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server

    Note right of browser: The server asks the browser to do a new HTTP GET request

    

