# SAP Saphire

## Frontend

### Translations

* use google translate or similar api
* pre translate and retrieve when needed

#### Bitte wählen Sie den Verkehrsträger aus - Mode of transport

```JS
const modeOfTransport = document.querySelectorAll('.sapMSLITitleOnly');

[...texts].forEach(t=>console.log(t.textContent));
```

```JS
[...document.querySelectorAll('div')].filter(e => e.textContent === 'Bitte wählen Sie den Verkehrsträger aus')[0].textContent = 'Please select the mode of transport';

[...document.querySelectorAll('div')].filter(e => e.textContent === 'Mosolf LKW (eigene und Subunternehmer)')[0].textContent = 'Mosolf Truck (own and subcontractor)';

[...document.querySelectorAll('div')].filter(e => e.textContent === 'Fremd-LKW')[0].textContent = 'Foreign Truck';

[...document.querySelectorAll('div')].filter(e => e.textContent === 'eigene Achse')[0].textContent = 'Own Axis';
```

#### Mosolf Truck

```JS

```

### Ideas

### Questions

## Backend

### Ideas

### Questions
