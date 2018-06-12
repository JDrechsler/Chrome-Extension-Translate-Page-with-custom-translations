//@ts-check

// @ts-ignore
if (window.ZXing === undefined) {
	var tag = document.createElement('script');
	tag.src =
		'https://cdn.rawgit.com/zxing-js/library/master/docs/examples/zxing.qrcodereader.min.js';
	tag.type = 'text/javascript';
	var hookTag = document.getElementsByTagName('script')[0];
	hookTag.parentNode.insertBefore(tag, hookTag);
}

/**
 * @description Contains string pairs for translation
 */
const translationStringPairs = [
	'3-stelliger Steuercode (oder weiter ohne Eingabe)|3-digit control code (or continue without input)',
	'ab Werk WOB-Fallersleben|From factory WOB-Fallersleben',
	'ab Werk WOB|From factory WOB',
	'Abbrechen|Cancel',
	'Abgangsort WOB|Departure location WOB',
	'andere|others',
	'App zur Erfassung der Fahrzeugeingänge|App for vehicle inbound registration',
	'Ausstattungsfeld|Equipment Field',
	'Automatik|Automatic',
	'Backend wird aufgerufen|Calling backend system',
	'Bahn|Train',
	'Bahneingang|Inbound Train',
	'befindet sich im Fahrzeug ein Beipack?|Is there an accessory pack in the vehicle?',
	'Benzin|Gasoline',
	'Bitte die Zugnummer erfassen|Please enter the truck number',
	'Bitte Eingangscode scannen|Please scan entry code',
	'Bitte erfassen Sie den Stellplatz des Fahrzeugs|Please enter the parking space of the vehicle',
	'Bitte Fahrzeugtyp auswählen|Please select vehicle type',
	'Bitte geben Sie das ZP8- oder Protokolldatum ein|Please enter the ZP8 or log date',
	'Bitte Vertrag auswählen|Please select contract',
	'Bitte wählen Sie den Abgangsort aus|Please select the location of departure',
	'Bitte wählen Sie den Fahrzeugtyp aus|Please select the vehicle type',
	'Bitte wählen Sie den Geschwindigkeitsindex aus|Please select the speed index',
	'Bitte wählen Sie den Grund des Vorbehaltes aus|Is a visual check for damage possible?',
	'Bitte wählen Sie den Verkehrsträger aus|Please select the vehicle type',
	'Bitte wählen Sie die Eingangsblock und -Reihe aus|Please select the inbound block and row',
	'Bitte wählen Sie die Getriebeart aus|Please select the gear type',
	'Bitte wählen Sie die Kraftstoffart aus|Please select the fuel type',
	'Bitte wählen Sie die Reifenart aus|Please select the tire type',
	'Bitte warten...|Please wait...',
	'Compound auswählen|Choose compound',
	'Datum|Date',
	'Details zur Ladung|Load details',
	'Dienstleistungsgruppen| Service Groups',
	'Drucken|Print',
	'eigene Achse / |Own Truck / ',
	'eigene Achse|Own Truck',
	'Eigene Achse|Own Truck',
	'Eingang sichern|Save input',
	'Eis (Kontrolle nicht möglich)|Ice (no control possible)',
	'Eis und Schnee (Kontrolle nicht möglich)|Ice and snow (cannot be checked)',
	'Elektromotor|Electric motor',
	'Entlastung Fahrer|Driver is discharged',
	'Erfasste Fahrzeuge|Registered vehicles',
	'ERP Aufruf|ERP Call',
	'Error|',
	'Fahrstraße|Road',
	'Fahrzeug wurde an SAP zur Weitervearbeitung übergeben \n|Vehicle was transferred to SAP for further processing.',
	'Fahrzeug|Vehicle',
	'Fahrzeugeingang|Vehicle Inbound Registration',
	'Fehler|Error',
	'Feld|Field',
	'Folie (Kontrolle nicht möglich)|Foil (cannot be checked)',
	'Fremd-LKW|Other Truck',
	'Gebrauchtwagen ohne Transportmodus|Used car without transport mode',
	'Gebrauchtwagen|Used car',
	'Grund des Vorbehaltes|Visual check possible',
	'Hat das Fahrzeug ein Navi?|Does the vehicle have a navigation device?',
	'Hat das Fahrzeug eine Folie?|Does the vehicle have a foil?',
	'Hat das Vehicle Startprobleme?|Does the vehicle have engine starting difficulties?',
	'Herst. / Typ / Vertr.|Manuf / Type / Contr.',
	'Ist der Transportschutz beschädigt?|Is the transport protection damaged?',
	'Ja, beschädigt|Yes, damaged',
	'Ja, unbeschädigt|Yes, undamaged',
	'Ja|Yes',
	'Kanndienstleistungen|Optional services',
	'Keine Daten vorhanden|No data available',
	'Keine Daten zum Review|No data to review',
	'Keine Dienstleistungsgruppen verfügbar|No service groups available',
	'Keine Fahrzeuge erfasst|No vehicles registered',
	'Keine Fahrzeuge erfasst|No vehicles registered',
	'Keine Kanndienstleistungen verfügbar|No optional services available',
	'Keine Touren erfasst|No tours registered',
	'Keine Verträge gefunden|No contracts were found',
	'Ladung|Load',
	'Lager Gebr Eigene Achs- #7260#|Used Vehicle own axis Warehouse Pool - #7260# ',
	'Lager Gebr FremdAnl - #7259#|Stock Used Third Party Equipment - #7259#',
	'Lager Gebr Shuttle - #7261#|Stock Used Shuttle - #7261#',
	'Lager Pool Neufzge - #7269#|New Vehicles Warehouse Pool - #7269#',
	'LKW|Truck',
	'Manuell|Manual',
	'manuelle Eingabe|Manual entry',
	'Mosolf LKW (eigene und Subunternehmer)|Mosolf Truck (own and sub contractors)',
	'nächstes Fahrzeug erfassen|Register next vehicle',
	'Nein|No',
	'Neue Erfassung|New Entry',
	'Neuwagen ohne Transportmodus|New car without transport mode',
	'Neuwagen|New car',
	'nicht bekannt|Unknown',
	'Nicht gefunden (404)|Not found (404)',
	'Ohne Vorbehalt|Visual check is possible',
	'Paginier Nummer eingeben|Enter Paginier number',
	'Paginier Nummer|Paginier number',
	'Paginiernummer erfassen|Store Paginier number',
	'Paginiernummer|Paginier number',
	'Regen (Kontrolle nicht möglich)|Rain (cannot be checked)',
	'Reihe|Row',
	'Review-Schritt|Review Step',
	'Schadenserfassung|Record a damage',
	'Schiff|Ship',
	'Schiffseingang|Inbound Ship',
	'Schließen|Close',
	'Schnee (Kontrolle nicht möglich)|Snow (cannot be checked)',
	'Sixt Einsteuerung - #7289#|Sixt Control - #7289#',
	'Sommer|Summer',
	'Sorry, die Seite ist nicht verfügbar!|Sorry, this page is not available!',
	'Spur|Lane',
	'Stellplatz|Space',
	'Streckenbruch-Prüfung|Check for tour breaks',
	'Szenario auswählen|Choose scenario',
	'Tour beenden|End tour',
	'Touren Übersicht|Tours Overview',
	'Übernehmen|Confirm',
	'übertragen|Transmit',
	'Unbekannter Auftrag|Unknown Contract',
	'Userdaten und Customizing werden geladen...|Loading user data and customizing...',
	'verdeckter Schaden (Kontrolle nicht möglich)|Concealed damage (cannot be checked)',
	'Verkehrsträger auswählen|Choose Vehicle Type',
	'Vertragsprüfung|Contract review',
	'VIN darf nicht leer sein!|VIN may not be empty!',
	'VIN fehlt in Aufruf zur VIN_Prüfung|VIN is missing',
	'VIN ist zu kurz!|VIN is too short!',
	'VIN scannen|Scan VIN',
	'sind Geräusche beim Bremsen zu hören?|Can you hear breaking noises?',
	'VW Zielbahnhof 38 - #4688#|VW destination station 38 - #4688#',
	'Warte auf Daten|Waiting for data',
	'Weiter|Continue',
	'Wert|Value',
	'Zeit|Time',
	'Zugnummer nicht als Equipmentstamm vorhanden |Truck number not available',
	'Zugnummer|Truck number',
	'Zugnummernprüfung|Checking truck number',
	'Zum Host ARV_DREC021 konnte kein Compound ermittelt werden! \n|No compound could be determined for host ARV_DREC021!'
];

translationStringPairs.sort((a, b) => {
	return b.length - a.length;
});

function iterateThroughMostInnerDivs() {
	const mostInnerDivs = [...document.body.getElementsByTagName('*')].filter(
		e => e.childElementCount === 0
	);
	translationStringPairs.forEach(pair => {
		const germanText = pair.split('|')[0];
		mostInnerDivs.forEach(currentNode => {
			if (currentNode.textContent.includes(germanText)) {
				const englishTranslation = pair.split('|')[1];
				currentNode.textContent = currentNode.textContent.replace(
					germanText,
					englishTranslation
				);
			}

			if (currentNode.tagName === 'INPUT') {
				const inputNode = /**@type {HTMLInputElement} */ (currentNode);
				if (inputNode.placeholder === germanText) {
					const englishTranslation = pair.split('|')[1];
					inputNode.placeholder = englishTranslation;
				}

				if (inputNode.placeholder === 'Enter Paginier number') {
					// @ts-ignore
					if (window.ZXing !== 'undefined') {
						if (document.querySelector('video') === null) {
							const qrSection = document.createElement('video');
							qrSection.id = 'video';
							qrSection.style.border = '1px solid gray';
							qrSection.style.width = '100%';
							qrSection.style.display = 'none';
							const inputDiv = inputNode.parentElement.parentElement;
							inputDiv.parentNode.insertBefore(
								qrSection,
								inputDiv.nextElementSibling
							);

							const btnStart = document.createElement('button');
							btnStart.id = 'startVideo';
							btnStart.textContent = 'Start QR Reader';
							btnStart.className =
								'sapMBtn sapMBtnDefault sapMBtnInner sapMBtnText';
							btnStart.style.width = '100%';
							btnStart.addEventListener('click', () => {
								startQRReader(qrSection);
							});

							qrSection.parentElement.insertBefore(
								btnStart,
								qrSection.nextElementSibling
							);
						}
					}
				}

				if (inputNode.placeholder === 'VIN') {
					inputNode.placeholder = 'TMBJJ7NE4H0071010';
					// copyToClipboard();
					// if ('ZXing' in Window) {
					// 	console.log('QR Code Reader supported.');
					// }
				}
			}
		});
	});
}

function startQRReader(/**@type {HTMLVideoElement} */ videoElement) {
	videoElement.style.display = 'initial';
}

// async function copyToClipboard() {
// 	// @ts-ignore
// 	await navigator.clipboard.writeText('YV4A22PL4H1172867');
// }

function main() {
	iterateThroughMostInnerDivs();
	setInterval(() => {
		iterateThroughMostInnerDivs();
	}, 10);
}

console.log('Translation background server started.');
main();
