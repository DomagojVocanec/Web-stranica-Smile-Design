function languageLabels(lang, page){
    var lang_obj = {};

    switch(lang){
        case 'hr':
		
		
		
		
		
            switch(page){
                case 'comments': 
                    lang_obj = {
                        title: 'Komentari',
                        bubbleComments: 'komentari',
                        commentsList: 'Popis komentara',
                        addComment: 'Dodavanje komentara',
                        commentCreator: 'Autor',
                        commentTitle: 'Naslov',
                        commentCategory: 'Kategorija',
                        commentDetails: 'Opis',
                        commentDate: 'Datum',
                        showCommentDetails: 'Prikaži detalji komentara',
                        isCommented: 'je komentirao', // User QWE je komentirao XYZ
                        commentReply: 'Odgovorite',
                        commentReplys: 'Odgovori',
                        commentArchive: 'Arhiva komentara',
                        filterByAuthor: 'Filter po autoru',
                        noComments: 'Trenutno nemate niti jedan komentar.',
                        newComment: 'Novi komentar',
                    };
                break;

                case 'configuration':
                    lang_obj = {
                        title: 'Postavke',
                        configurationApp: 'Postavke aplikacije',
                        listEmployees: 'Popis djelatnika',
                        addEmployee: 'Dodaj djelatnika',

                        applicationName: 'Naziv',
                        applicationNameCompany: 'Naziv tvrtke',
                        applicationImage: 'Slika',
                        applicationAddress: 'Adresa',
                        applicationAddress2: 'Adresa 2',
                        applicationCity: 'Grad',
                        applicationState: 'Država/Provincija/Regija',
                        applicationZip: 'Poštanski broj',
                        applicationCountry: 'Zemlja',
                        applicationPhone: 'Telefon',
                        applicationIndustry: 'Industrija',
                        applicationPricePerLiter: 'Cijena po litri (radni nalozi)',
                        applicationPricePerLiterDefault: 'Uobičajena cijena: 2',
                        emailForReports: 'E-mail podrške',
                        saveConfiguration: 'Spremi konfiguraciju',

                        deleteConfirmation: 'Potvrda brisanja',
                        confirmActivationTitle: 'Potvrda aktivacije',
                        deleteConfirmationText: 'Jeste li sigurni da želite deaktivirati djelatnika',
                        activateConfirmationText: 'Jeste li sigurni da želite aktivirati djelatnika',
                        searchEmployee: 'Traži djelatnika',
                    };
                break;

                case 'default':
                    lang_obj = {
                        logout: 'Odjava',
                        save: 'Spremi',
                        add: 'Dodaj',
                        edit: 'Uredi',
                        delete: 'Obriši',
                        close: 'Zatvori',
                        back: 'Povratak',
                        choose: 'Odaberite',
                        action: 'Akcija',
                        search: 'Pretraži',
                        role: 'Pravo',
                        cancel: 'Otkaži',
                        nothingFound: 'Ništa nije pronađeno',
                        generateNewPassword: 'Generiraj novu lozinku',
                        of: 'od',

                        removeEmployee: 'Obrišite djelatnika',
                        selectMonitoring: 'Odaberite praćenje',
                        listMonitoring: 'Lista praćenja',
                        searchMonitoring: 'Pretraži praćenja',

                        // Sidebar
                        dashboard: 'Radna ploča',
                        vehicles: 'Vozila',
                        interventions: 'Zahvati',
                        reminders: 'Podsjetnici',
                        malfunction: 'Neispravnosti',
                        fuel: 'Gorivo',
                        reports: 'Izvještaji',
                        workOrder: 'Radni nalozi',
                        settings: 'Postavke',
                        confirmActivationButton: 'Aktiviraj',
                        confirmDeactivationButton: 'Deaktiviraj',

                        complete: 'Završen',
                        details: 'Detalji',

                        //Exceptions
                        successfulInsertVehicle: 'Uspješno uneseno vozilo',
                        successfulUpdateVehicle: 'Uspješno uređeno vozilo',

                        exceptionError: 'Greška!',
                        notAllowedUpdate: 'Nemate dozvolu uređivanja',
                        notAllowedChooseVehicle: 'Nemate dozvolu odabira ovog vozila',
                        notAllowedUpdateFuel: 'Nemate dozvolu editiranja punjenja', // (tenkiranje goriva)

                        notAllowedDelete: 'Nemate dozvolu brisanja',

                        successfulStoreFuel: 'Uspješno spremljeno punjenje',
                        successfulUpdateFuel: 'Uspješno uređeno punjenje',
                        successfulDeleteFuel: 'Uspješno obrisano punjenje', // (tenkiranje goriva)

                        notAllowedToCompleteMalfunction: 'Nemate dozvolu završetka neispravnosti',
                        malfunctionAlreadyCompleted: 'Ova neispravnost je već odrađena',

                        malfunctionStore: 'Uspješno unesena neispravnost',
                        malfunctionComplete: 'Uspješno odrađena neispravnost',
                        malfunctionCompleteUpdate: 'Uspješno uređena neispravnost',

                        notAllowedUpdateMalfunction: 'Nemate dozvolu uređivanja neispravnosti',
                        notAllowedUpdateMalfunction: 'Nemate dozvolu editiranja neispravnosti',
                        successfulDeleteMalfunction: 'Uspješno obrisana neispravnost',

                        exceptionErrorLanguage: 'Neuspješno odabran jezik',

                        notAllowedToCompleteReminder: 'Nemate dozvolu završetka podsjetnika',
                        reminderAlreadyCompleted: 'Ovaj podsjetnik je već odrađen',
                        reminderCompleteStore: 'Uspješno spremljen podsjetnik',
                        reminderCompleteUpdate: 'Uspješno uređen podsjetnik',
                        reminderComplete: 'Uspješno odrađen podsjetnik',


                        notAllowedToDeleteReminder: 'Nemate dozvolu brisanja',

                        failedStore: 'Spremanje nije uspjelo',


                        successfulUpdateConfiguration: 'Uspješno uređene postavke',
                        successfulInsertEmployee: 'Uspješno dodan djelatnik',
                        successfulDeleteEmployee: 'Uspješno obrisan djelatnik',

                        exceptionErrorMsg: 'Došlo je do pogreške. <br>Molimo provjerite internet konekciju pa pokušajte ponovo.<br><br>Osvježi aplikaciju?',
                    };
                break;

                case 'user':
                    lang_obj = {
                        title: 'Korisnički podaci',
                        userName: 'Ime i prezime',
                        userEmail: 'E-mail',
                        userImage: 'Slika',
                        userPassword: 'Lozinka',
                        userAddress: 'Adresa',
                        userCity: 'Grad',
                        userOIB: 'OIB',
                        userCompany: 'Tvrtka',
                        employeePermission: 'Prijava/odjava vozila djelatnika',
                        userAppLang: 'Jezik aplikacije',

                        userPlaceholder: 'generiraj novu lozinku...',

                        adminEditRole: 'Uređivanje prava',
                        currentUserRole: 'Trenutno pravo korisnika',

                        successEditRole: 'Uspješno ste promijenili pravo korisnika.',
                        failureEditRole: 'Neuspješna promjena prava korisnika.',

                        deleteUserMsg_1: 'Korisnik',
                        deleteUserMsg_2: 'je uspješno obrisan',

                        insertUserImage: 'Uspješno izmjenjena slika.',
                        removeUserImage: 'Uspješno obrisana slika',
                        userDetailsUpdate: 'Uspješno ažuriranje podataka.',
                    };
                break;

                case 'vehicles':
                    lang_obj = {
                        title: 'Vozila',
                        addVehicle: 'Dodaj vozilo',
                        editVehicle: 'Uredi vozilo',
                        deleteVehicle: 'Obriši vozilo',
                        chooseVehicle: 'Odaberite vozilo',
                        chooseDriver: 'Odaberite vozača',
                        noResults: 'Rezultati nisu pronađeni',
                        vehicleDetails: 'Detalji vozila',

                        searchVehicle: 'Tražite vozilo',

                        deleteConfirmation: 'Potvrda brisanja',
                        deleteConfirmationText: 'Jeste li sigurni da želite obrisati vozilo?',

                        assignVehicle: 'Trenutno vam nije dodjeljeno niti jedno vozilo.',


                        image: 'Slika',
                        name: 'Naziv',
                        type: 'Tip',
                        color: 'Boja',
                        mark: 'Marka',
                        model: 'Model',
                        year: 'Godina',
                        license_plate: 'Registracijska oznaka',
                        kilometers: 'Prijeđeni kilometri',
                        fuel_type: 'Gorivo',
                        tire_dimensions: 'Dimenzije guma',
                        driver: 'Vozač',
                        activity: 'Aktivnost',
                        currentDriver: 'Trenutni vozač',
                        changeDriver: 'Zamijeni vozača',


                        deleteVehicleMsg_1: 'Vozilo',
                        deleteVehicleMsg_2: 'je uspješno obrisano',

                        privateDriver: 'Vi ste vozač ovog vozila.',




                        // Image positions
                        posA1: 'Prednja guma',
                        posA2: 'Stražnja guma',
                        posA3: 'Prednje bočno staklo',
                        posA4: 'Stražnje bočno staklo',
                        posA5: 'Prednja vrata',
                        posA6: 'Stražnja vrata',
                        posA7: 'Prednji branik',
                        posA8: 'Prednji far',
                        posA9: 'Stražnji far',
                        posA10: 'Stražnji branik',
                        posA11: 'Donji branik',
                        posA12: 'Prednji blatobran',
                        posA13: 'Stražnji blatobran',

                        posB1: 'Motor',
                        posB2: 'Poklopac motora',
                        posB3: 'Prednje staklo',
                        posB4: 'Brisač',
                        posB5: 'Retrovizor',
                        posB6: 'Krov',
                        posB7: 'Stražnje staklo',
                        posB8: 'Poklopac prtljažnika',
                        posB9: 'Auspuh',


                        type1: 'Osobno vozilo',
                    };
                break;

                case 'fuel':
                    lang_obj = {
                        title: 'Gorivo',
                        filterByTitle: 'Filter po nazivu/reg. tablici',
                        filterByFiller: 'Filter po točiocu',
                        filterByKM: 'Filter po kilometrima',
                        filterByLiters: 'Filter po litrama',
                        filterByPrice: 'Filter po cijeni',
                        filterByPricePerLiter: 'Filter po cijeni/litri',
                        filterByPriceKMLast: 'Filter po kilometrima od zadnjeg točenja',
                        fill: 'Punjenje',
                        fillList: 'Popis punjenja',
                        vehicle: 'Vozilo',
                        filler: 'Točioc',
                        currentKilometers: 'Trenutni kilometri',
                        liters: 'Litre',
                        price: 'Cijena',
                        date: 'Datum',
                        pricePerLiter: 'Cijena/litra',
                        lastKM: 'KZT',
                        lastKMtitle: 'Kilometri od zadnjeg točenja',

                        editTitle: 'Uredi unos punjenja',
                        fieldRequired: 'Sva polja su obavezna',

                        addFuel: 'Dodaj punjenje',

                        ownFuel: 'Moja punjenja',
                    };
                break;

                case 'malfunction':
                    lang_obj = {
                        title: 'Neispravnosti',

                        vehicleList: 'Popis vozila',
                        yourMalfunctionsList: 'Popis neispravnosti vaših vozila',
                        insertMalfunction: 'Unesite neispravnost',

                        //Insert form
                        malfunctionVozilo: 'Vozilo',
                        malfunctionName: 'Naziv',
                        malfunctionDetails: 'Detalji',
                        malfunctionDate: 'Datum nastanka',
                        malfunctionEndDate: 'Krajnji datum popravka',
                        malfunctionStatus: 'Status',
                        malfunctionKilometersTraveled: 'Prijeđeni kilometri',
                        malfunctionImagePosition: 'Pozicija',
                        malfunctionSelectImagePosition: 'Odaberite poziciju',
                        malfunctionCost: 'Trošak',

                        fieldRequired: 'Sva polja su obavezna',

                        malfunctionSearchPosition: 'Pretražite poziciju',
                        malfunctionShowDetails: 'Prikaži detalje neispravnosti',
                        deleteConfirmation: 'Potvrda brisanja',
                        deleteConfirmationText: 'Jeste li sigurni da želite obrisati neispravnost?',
                        noMalfunction: 'Trenutno nemate niti jednu neispravnost.',


                        reminderMalfunctionComplete: 'Odrađeno',
                        reminderMalfunctionPending: 'Otvoreno',
                        reminderMalfunctionFailed: 'Kasni',

                        //hover text "Completed date xxxx-xx-xx"
                        date: 'datuma',

                        ownMalfunctions: 'Moje neispravnosti',
                        malfunctionDetailsTitle: 'Detalji o neispravnosti',

                        showImages: 'Prikaži slike',
                        imageBeforeTitle: 'Slika neispravnosti',
                        imageAfterTitle: 'Slika nakon popravka',


                        malfunctionInsertImages: 'Želite li unijeti slike neispravnosti?',
                        imageBeforeNotFound: 'Trenutno nema slike neispravnosti.',
                        imageAfterNotFound: 'Trenutno nema slike neispravnosti nakon popravka.',

                        addMalfunctionCategory: 'Dodaj novu poziciju',

                        malfunctionPagination: 'Neispravnost', //pagination


                        //Monitoring
                        monitoringTitle: 'Praćenja',
                        malfunctionFailed: 'kasni',
                        malfunctionPending: 'uskoro',

                        createReminder: 'Izradi podsjetnik',

                        completedUser: 'odradio neispravnost',
                    };
                break;

                case 'reminder':
                    lang_obj = {
                        title: 'Podsjetnici',
                        remindersList: 'Popis podsjetnika',
                        addReminder: 'Dodaj podsjetnik',
                        editReminder: 'Uredi podsjetnik',
                        deleteReminder: 'Obriši podsjetnik',

                        detailsReminder: 'Detalji podsjetnika',
                        deleteConfirmation: 'Potvrda brisanja',
                        deleteConfirmationText: 'Jeste li sigurni da želite obrisati podsjetnik',

                        reminderVehicle: 'Vozilo',
                        reminderName: 'Naziv',
                        reminderCategory: 'Kategorija',
                        reminderDetails: 'Detalji',
                        reminderDate: 'Datum',
                        reminderStatus: 'Status',

                        addReminderCategory: 'Dodaj novu kategoriju',

                        reminderShowDetails: 'Pokaži detalje podsjetnika',


                        deleteReminderMsg_1: 'Podsjetnik',
                        deleteReminderMsg_2: 'je uspješno obrisan',

                        reminderCompleteUpdate: 'Uspješno uređen podsjetnik',

                        //Monitoring
                        remindersFailed: 'kasni',
                        remindersPending: 'uskoro',

                        //after create vehicle
                        autoCreate1: 'Tekućina za pranje prozora <br/>&nbsp;&nbsp;&nbsp; - nakon 7 dana',
                        autoCreate2: 'Aparat za gašenje požara <br/>&nbsp;&nbsp;&nbsp; - nakon godinu dana',
                        autoCreate3: 'Gume - nakon 15000 kilometara',
                    };
                break;

                case 'report':
                    lang_obj = {
                        title: 'Izvještaji',

                        tabTitle: 'Izvještaj po',
                        dayTab: 'Dan',
                        userTab: 'Korisnik',
                        vehicleTab: 'Vozilo',

                        date: 'Datum',
                        dateFrom: 'Datum od',
                        dateTo: 'Datum do',

                        fillerName: 'Ime točioca',
                    };
                break;

                case 'workOrder':
                    lang_obj = {
                        title: 'Radni nalozi',

                        tabTitle: 'Radni nalog po',
                        tabDay: 'Dan',
                        tabMonth: 'Mjesec',
                        tabNewOrder: 'Novi nalog',

                        addOrder: 'Dodaj nalog',
                        date: 'Datum',
                        relation: 'Relacija',
                        vehicle: 'Vozilo',
                        creator: 'Korisnik',
                        kilometers_before: 'Početno stanje (km)',
                        kilometers_after: 'Završno stanje (km)',
                        kilometers_traveled: 'Prijeđeni kilometri',
                        visit_time: 'Vrijeme posjeta',
                        remark: 'Napomena',
                        counter: 'Brojilo',

                        chooseCreator: 'Odaberite vozača',
                        filterByCreator: 'Filter po vozaču',

                        editWorkOrder: 'Uredi radni nalog',

                        fieldRequired: 'Sva polja su obavezna',


                        workOrderList: 'Lista radnih naloga',

                        //PDF
                        pdfTitle: 'Putni radni nalog',
                        vehicleMark: 'Vozilo marke',
                        licensePlate: 'Registracijske oznaka vozila',
                        applicant: 'Podnositelj obračuna',
                        director: 'Direktor',
                        calculation: 'Obračun',
                        total: 'Ukupno',

                        from: 'od',
                        to: 'do',
                    };
                break;
            }
				
        break;

		
		
		

        case 'en':
			switch(page){
                case 'comments': 
                    lang_obj = {
                        title: 'Comments',
                        bubbleComments: 'comments',
                        commentsList: 'List of comments',
                        addComment: 'Add comments',
                        commentCreator: 'Author',
                        commentTitle: 'Title',
                        commentCategory: 'Category',
                        commentDetails: 'Description',
                        commentDate: 'Date',
                        showCommentDetails: 'View comment details',
                        isCommented: 'commented', // User QWE je komentirao XYZ
                        commentReply: 'Reply',
                        commentReplys: 'Replys',
                        commentArchive: 'Archive comments',
                        filterByAuthor: 'Filter by author',
                        noComments: 'You do not have a single comment at this time.',
                        newComment: 'New comment',
                    };
                break;

                case 'configuration':
                    lang_obj = {
                        title: 'Settings',
                        configurationApp: 'App Settings',
                        listEmployees: 'List of Employees',
                        addEmployee: 'Add Employee',

                        applicationName: 'Name',
                        applicationNameCompany: 'Company Name',
                        applicationImage: 'Image',
                        applicationAddress: 'Address',
                        applicationAddress2: 'Address 2',
                        applicationCity: 'City',
                        applicationState: 'State/Provinces/Region',
                        applicationZip: 'Zip Code',
                        applicationCountry: 'Country',
                        applicationPhone: 'Phone',
                        applicationIndustry: 'Industry',
                        applicationPricePerLiter: 'Price per liter (work orders)',
                        applicationPricePerLiterDefault: 'Usual price: 2',
                        emailForReports: 'E-mail Support',
                        saveConfiguration: 'Save Configuration',

                        deleteConfirmation: 'Confirmation of deletion',
                        confirmActivationTitle: 'Activation confirmation',
                        deleteConfirmationText: 'Are you sure you want to deactivate an employee',
                        activateConfirmationText: 'Are you sure you want to activate an employee?',
                        searchEmployee: 'Search for employee',
                    };
                break;

                case 'default':
                    lang_obj = {
                        logout: 'Logout',
                        save: 'Save',
                        add: 'Add',
                        edit: 'Edit',
                        delete: 'Delete',
                        close: 'Close',
                        back: 'Back',
                        choose: 'Choose',
                        action: 'Action',
                        search: 'Search',
                        role: 'Role',
                        cancel: 'Cancel',
                        nothingFound: 'Nothing found',
                        generateNewPassword: 'Generate a new password',
                        of: 'of',

                        removeEmployee: 'Delete employee',
                        selectMonitoring: 'Select monitoring',
                        listMonitoring: 'Tracklist',
                        searchMonitoring: 'Search monitoring',

                        // Sidebar
                        dashboard: 'Dashboard',
                        vehicles: 'Vehicles',
                        interventions: 'Interventions',
                        reminders: 'Reminders',
                        malfunction: 'Malfunctions',
                        fuel: 'Fuel',
                        reports: 'Reports',
                        workOrder: 'Work orders',
                        settings: 'Settings',
                        confirmActivationButton: 'Activate',
                        confirmDeactivationButton: 'Deactivate',

                        complete: 'Complete',
                        details: 'Details',

                        //Exceptions
                        successfulInsertVehicle: 'Successfully entered vehicle',
                        successfulUpdateVehicle: 'Successfully regulated vehicle',

                        exceptionError: 'Error!',
                        notAllowedUpdate: 'You do not have permission to edit',
                        notAllowedChooseVehicle: 'You are not allowed to choose this vehicle',
                        notAllowedUpdateFuel: 'You are not allowed filling a fuel', // (tenkiranje goriva)

                        notAllowedDelete: 'You are not allowed to delete',

                        successfulStoreFuel: 'Successfully stored fill',
                        successfulUpdateFuel: 'Successfully regulated filling',
                        successfulDeleteFuel: 'Successfull deleted filling', // (tenkiranje goriva)

                        notAllowedToCompleteMalfunction: 'You do not have permission to complete the malfunction',
                        malfunctionAlreadyCompleted: 'This malfunction has already been completed',

                        malfunctionStore: 'Successfully entered malfunction',
                        malfunctionComplete: 'Successfully completed malfunction',
                        malfunctionCompleteUpdate: 'Successfully updated malfunction',

                        notAllowedUpdateMalfunction: 'You are not allowed to update malfunctions',
                        notAllowedUpdateMalfunction: 'You are not allowed to edit malfunctions',
                        successfulDeleteMalfunction: 'Successfully deleted malfunction',

                        exceptionErrorLanguage: 'Unsuccessfully selected language',

                        notAllowedToCompleteReminder: 'You do not have permission to complete the reminder',
                        reminderAlreadyCompleted: 'Reminder already completed',
                        reminderCompleteStore: 'Successfully saved reminder',
                        reminderCompleteUpdate: 'Successfully edited reminder',
                        reminderComplete: 'Successfully completed reminder',


                        notAllowedToDeleteReminder: 'You do not have permission to delete',

                        failedStore: 'Saving failed',


                        successfulUpdateConfiguration: 'Successfully configured settings',
                        successfulInsertEmployee: 'Successfully added an employee',
                        successfulDeleteEmployee: 'Successfully deleted employee',

                        exceptionErrorMsg: 'There was an error. <br>Please check the internet connection and try again.<br><br>Refresh application?',
                    };
                break;

                case 'user':
                    lang_obj = {
                        title: 'Data users',
                        userName: 'Name and surname',
                        userEmail: 'E-mail',
                        userImage: 'Image',
                        userPassword: 'Password',
                        userAddress: 'Address',
                        userCity: 'City',
                        userOIB: 'OIB',
                        userCompany: 'Company',
                        employeePermission: 'Log in/log out employees vehicles',
                        userAppLang: 'Application language',

                        userPlaceholder: 'generate new password...',

                        adminEditRole: 'Editing rights',
                        currentUserRole: 'Current user rights',

                        successEditRole: "You have successfully edit the user's right.",
                        failureEditRole: 'Unsuccessful change of user rights.',

                        deleteUserMsg_1: 'User',
                        deleteUserMsg_2: 'has been successfully deleted',

                        insertUserImage: 'Successfully updated image.',
                        removeUserImage: 'Successfully deleted image',
                        userDetailsUpdate: 'Successful update of data.',
                    };
                break;

                case 'vehicles':
                    lang_obj = {
                        title: 'Vehicle',
                        addVehicle: 'Add vehicle',
                        editVehicle: 'Edit vehicle',
                        deleteVehicle: 'Delete vehicle',
                        chooseVehicle: 'Choose vehicle',
                        chooseDriver: 'Choose a driver',
                        noResults: 'Results not found',
                        vehicleDetails: 'Vehicle details',

                        searchVehicle: 'Search vehicle',

                        deleteConfirmation: 'Confirmation of deletion',
                        deleteConfirmationText: 'Are you sure you want to delete the vehicle?',

                        assignVehicle: 'You are currently not assigned any vehicle.',


                        image: 'Image',
                        name: 'Name',
                        type: 'Type',
                        color: 'Color',
                        mark: 'Mark',
                        model: 'Model',
                        year: 'Year',
                        license_plate: 'License plate',
                        kilometers: 'Traveled kilometers',
                        fuel_type: 'Fuel',
                        tire_dimensions: 'Tire dimensions',
                        driver: 'Driver',
                        activity: 'Activity',
                        currentDriver: 'Current driver',
                        changeDriver: 'Change driver',


                        deleteVehicleMsg_1: 'Vehicle',
                        deleteVehicleMsg_2: 'has been deleted',

                        privateDriver: 'You are driver of this vehicle.',




                        // Image positions
                        posA1: 'Front tire',
                        posA2: 'Rear/back tire',
                        posA3: 'Front side glass',
                        posA4: 'Rear/back side glass',
                        posA5: 'Front door',
                        posA6: 'Rear/back door',
                        posA7: 'Front bumber',
                        posA8: 'Front fender',
                        posA9: 'Rear/back fender',
                        posA10: 'Rear/back bumber',
                        posA11: 'Bottom bumper',
                        posA12: 'Front mudguard',
                        posA13: 'Rear/back mudguard',

                        posB1: 'Engine',
                        posB2: 'Bonnet',
                        posB3: 'Windshield',
                        posB4: 'Wiper',
                        posB5: 'Rearview mirror',
                        posB6: 'Roof',
                        posB7: 'Rear/back window',
                        posB8: 'Trunk lid',
                        posB9: 'Exhaust',


                        type1: 'Personal vehicle',
                    };
                break;

                case 'fuel':
                    lang_obj = {
                        title: 'Fuel',
                        filterByTitle: 'Filter by name/reg. table',
                        filterByFiller: 'Filter by filler',
                        filterByKM: 'Filter by kilometers',
                        filterByLiters: 'Filter by liters',
                        filterByPrice: 'Filter by price',
                        filterByPricePerLiter: 'Filter by price/liter',
                        filterByPriceKMLast: 'Filter by KLP',
                        fill: 'Filling',
                        fillList: 'Filling list',
                        vehicle: 'Vehicle',
                        filler: 'Filler',
                        currentKilometers: 'Current kilometers',
                        liters: 'Liter',
                        price: 'Price',
                        date: 'Date',
                        pricePerLiter: 'Price/liter',
                        lastKM: 'KLP',
                        lastKMtitle: 'Kilometers from the last point',

                        editTitle: 'Edit entry of filling',
                        fieldRequired: 'All fields are required',

                        addFuel: 'Add fill',

                        ownFuel: 'My filling a fuel',
                    };
                break;

                case 'malfunction':
                    lang_obj = {
                        title: 'Malfuctions',

                        vehicleList: 'Vehicle list',
                        yourMalfunctionsList: 'List of malfunctions of your vehicles',
                        insertMalfunction: 'Enter the malfunctions',

                        //Insert form
                        malfunctionVozilo: 'Vehicle',
                        malfunctionName: 'Name',
                        malfunctionDetails: 'Details',
                        malfunctionDate: 'Date of occurrence',
                        malfunctionEndDate: 'End date of repair',
                        malfunctionStatus: 'Status',
                        malfunctionKilometersTraveled: 'Traveled kilometers',
                        malfunctionImagePosition: 'Position',
                        malfunctionSelectImagePosition: 'Select position',
                        malfunctionCost: 'Cost',

                        fieldRequired: 'All fields are required',

                        malfunctionSearchPosition: 'Search the position',
                        malfunctionShowDetails: 'Show details of malfunctions',
                        deleteConfirmation: 'Confirmation of deletion',
                        deleteConfirmationText: 'Are you sure you want to delete the malfunction?',
                        noMalfunction: 'You do not have any malfunctions at this time.',


                        reminderMalfunctionComplete: 'Completed',
                        reminderMalfunctionPending: 'Open',
                        reminderMalfunctionFailed: 'Delayed',

                        //hover text "Completed date xxxx-xx-xx"
                        date: 'date',

                        ownMalfunctions: 'Own malfunctions',
                        malfunctionDetailsTitle: 'Details of the malfunctions',

                        showImages: 'Show images',
                        imageBeforeTitle: 'Image of malfunctions',
                        imageAfterTitle: 'Image after repairing',


                        malfunctionInsertImages: 'Do you want to enter an image of malfunction?',
                        imageBeforeNotFound: 'There is currently no image of malfunction.',
                        imageAfterNotFound: 'There is currently no image of malfunction after repairing.',

                        addMalfunctionCategory: 'Add new position',

                        malfunctionPagination: 'Malfunction', //pagination


                        //Monitoring
                        monitoringTitle: 'monitoring',
                        malfunctionFailed: 'failed',
                        malfunctionPending: 'pending',

                        createReminder: 'Create reminder',

                        completedUser: 'completed malfunction',
                    };
                break;

                case 'reminder':
                    lang_obj = {
                        title: 'Reminders',
                        remindersList: 'List of reminders',
                        addReminder: 'Add a reminder',
                        editReminder: 'Edit a reminder',
                        deleteReminder: 'Delete a reminder',

                        detailsReminder: 'Details of reminders',
                        deleteConfirmation: 'Confirmation of deletion',
                        deleteConfirmationText: 'Are you sure you want to delete a reminder',

                        reminderVehicle: 'Vehicle',
                        reminderName: 'Name',
                        reminderCategory: 'Category',
                        reminderDetails: 'Details',
                        reminderDate: 'Date',
                        reminderStatus: 'Status',

                        addReminderCategory: 'Add a new category',

                        reminderShowDetails: 'Show reminder details',


                        deleteReminderMsg_1: 'Reminder',
                        deleteReminderMsg_2: 'has been successfully deleted',

                        reminderCompleteUpdate: 'Successfully updated reminder',

                        //Monitoring
                        remindersFailed: 'failed',
                        remindersPending: 'pending',

                        //after create vehicle
                        autoCreate1: 'Liquid for washing windows <br/>&nbsp;&nbsp;&nbsp; - after 7 days',
                        autoCreate2: 'Fire extinguisher <br/>&nbsp;&nbsp;&nbsp; - after a year',
                        autoCreate3: 'Tires - after 15,000 kilometers',
                    };
                break;

                case 'report':
                    lang_obj = {
                        title: 'Reports',

                        tabTitle: 'Report by',
                        dayTab: 'Day',
                        userTab: 'Filler',
                        vehicleTab: 'Vehicle',

                        date: 'Date',
                        dateFrom: 'Date from',
                        dateTo: 'Date to',

                        fillerName: 'Filler name',
                    };
                break;

                case 'workOrder':
                    lang_obj = {
                        title: 'Work orders',

                        tabTitle: 'Work order by',
                        tabDay: 'Day',
                        tabMonth: 'Month',
                        tabNewOrder: 'New work order',

                        addOrder: 'Add work order',
                        date: 'Date',
                        relation: 'Relation',
                        vehicle: 'Vehicle',
                        creator: 'Driver',
                        kilometers_before: 'Initial state (km)',
                        kilometers_after: 'Final state (km)',
                        kilometers_traveled: 'Kilometers traveled',
                        visit_time: 'Visit time',
                        remark: 'Remark',
                        counter: 'Counter',

                        chooseCreator: 'Choose driver',
                        filterByCreator: 'Filter by driver',

                        editWorkOrder: 'Edit work order',

                        fieldRequired: 'All fields are required',


                        workOrderList: 'Work order list',

                        //PDF
                        pdfTitle: 'Travel work order',
                        vehicleMark: 'Vehicle mark',
                        licensePlate: 'Vehicle license plate',
                        applicant: 'Applicant',
                        director: 'Director',
                        calculation: 'Calculation',
                        total: 'Total',

                        from: 'from',
                        to: 'to',
                    };
                break;
            }
		
			
		
		
		
		
        break;


        case 'de':
			switch(page){
                case 'comments': 
                    lang_obj = {
                        title: 'Kommentare',
                        bubbleComments: 'Kommentare',
                        commentsList: 'Liste der Kommentare',
                        addComment: 'Fügen Sie Kommentare hinzu',
                        commentCreator: 'Autor',
                        commentTitle: 'Überschrift',
                        commentCategory: 'Kategorie',
                        commentDetails: 'Beschreibung',
                        commentDate: 'Datum',
                        showCommentDetails: 'Kommentardetails anzeigen',
                        isCommented: 'kommentiert', // User QWE je komentirao XYZ
                        commentReply: 'Antwort',
                        commentReplys: 'antworten',
                        commentArchive: 'Archiv Kommentare',
                        filterByAuthor: 'Nach Autor filtern',
                        noComments: 'Sie haben derzeit keinen Kommentar.',
                        newComment: 'Neuer Kommentar',
                    };
                break;

                case 'configuration':
                    lang_obj = {
                        title: 'Einstellungen',
                        configurationApp: 'App-Einstellungen',
                        listEmployees: 'Liste der Mitarbeiter',
                        addEmployee: 'Mitarbeiter hinzufügen',

                        applicationName: 'Name',
                        applicationNameCompany: 'Firmenname',
                        applicationImage: 'Bild',
                        applicationAddress: 'Adresse',
                        applicationAddress2: 'Adresse 2',
                        applicationCity: 'Stadt',
                        applicationState: 'Staat/Land/Region',
                        applicationZip: 'Postleitzahl',
                        applicationCountry: 'Staat',
                        applicationPhone: 'Telefon',
                        applicationIndustry: 'Industrie',
                        applicationPricePerLiter: 'Preis pro Liter (Arbeitsaufträge)',
                        applicationPricePerLiterDefault: 'Üblicher Preis: 2',
                        emailForReports: 'E-Mail für Benachrichtigungen',
                        saveConfiguration: 'Konfiguration speichern',

                        deleteConfirmation: 'Bestätigung der Löschung',
                        confirmActivationTitle: 'Aktivierungsbestätigung',
                        deleteConfirmationText: 'Möchten Sie einen Mitarbeiter wirklich deaktivieren?',
                        activateConfirmationText: 'Sind Sie sicher, dass Sie einen Mitarbeiter aktivieren möchten?',
                        searchEmployee: 'Suche nach Mitarbeitern',
                    };
                break;

                case 'default':
                    lang_obj = {
                        logout: 'Abmelden',
                        save: 'Speichern',
                        add: 'Hinzufügen',
                        edit: 'Bearbeiten',
                        delete: 'Löschen',
                        close: 'Schließen',
                        back: 'Rückkehr',
                        choose: 'Auswählen',
                        action: 'Aktion',
                        search: 'Suche',
                        role: 'Rolle',
                        cancel: 'Stornieren',
                        nothingFound: 'Nichts wurde gefunden',
                        generateNewPassword: 'Neues Kennwort erstellen',
                        of: 'von',

                        removeEmployee: 'Mitarbeiter entfernen',
                        selectMonitoring: 'Wählen Sie die Verfolgung aus',
                        listMonitoring: 'Trackliste',
                        searchMonitoring: 'Suchverfolgung',

                        // Sidebar
                        dashboard: 'Arbeitsbrett',
                        vehicles: 'Fahrzeuge',
                        interventions: 'Eingriffe',
                        reminders: 'Erinnerungen',
                        malfunction: 'Fehlfunktion',
                        fuel: 'Treibstoff',
                        reports: 'Berichte',
                        workOrder: 'Arbeitsaufträge',
                        settings: 'Einstellungen',
                        confirmActivationButton: 'Aktivieren',
                        confirmDeactivationButton: 'Deaktivieren',

                        complete: 'Fertig',
                        details: 'Details',

                        //Exceptions
                        successfulInsertVehicle: 'Erfolgreich eingegebenes Fahrzeug',
                        successfulUpdateVehicle: 'Erfolgreich reguliert Fahrzeug',

                        exceptionError: 'Fehler!',
                        notAllowedUpdate: 'Sie dürfen nicht bearbeiten',
                        notAllowedChooseVehicle: 'Sie dürfen dieses Fahrzeug nicht auswählen',
                        notAllowedUpdateFuel: 'Sie dürfen das Tanken nicht bearbeiten', // (tenkiranje goriva)

                        notAllowedDelete: 'Sie dürfen nicht löschen',

                        successfulStoreFuel: 'Erfolgreich gespeichert füllen',
                        successfulUpdateFuel: 'Erfolgreich arrangierte Füllung',
                        successfulDeleteFuel: 'Tanken erfolgreich gelöscht', // (tenkiranje goriva)

                        notAllowedToCompleteMalfunction: 'Sie dürfen die Fehlfunktion nicht beheben',
                        malfunctionAlreadyCompleted: 'Diese Fehlfunktion ist bereits behoben',

                        malfunctionStore: 'Erfolgreich eingegeben Störung',
                        malfunctionComplete: 'Fehlfunktion erfolgreich behoben',
                        malfunctionCompleteUpdate: 'Fehlfunktion erfolgreich bearbeitet',

                        notAllowedUpdateMalfunction: 'Sie dürfen die Fehlfunktion nicht bearbeiten',
                        notAllowedUpdateMalfunction: 'Sie dürfen die Fehlfunktion nicht bearbeiten',
                        successfulDeleteMalfunction: 'Fehlfunktion erfolgreich gelöscht',

                        exceptionErrorLanguage: 'Nicht erfolgreich ausgewählte Sprache',

                        notAllowedToCompleteReminder: 'Sie sind nicht berechtigt, die Erinnerung abzuschließen',
                        reminderAlreadyCompleted: 'Diese Erinnerung wurde bereits gemacht',
                        reminderCompleteStore: 'Erinnerung erfolgreich gespeichert',
                        reminderCompleteUpdate: 'Erfolgreich gestaltete Erinnerung',
                        reminderComplete: 'Eine erfolgreiche Erinnerung',


                        notAllowedToDeleteReminder: 'Sie haben keine Berechtigung zum Löschen',

                        failedStore: 'Speichern fehlgeschlagen',


                        successfulUpdateConfiguration: 'Erfolgreich konfigurierte Einstellungen',
                        successfulInsertEmployee: 'Erfolgreich hinzugefügt einen Mitarbeiter',
                        successfulDeleteEmployee: 'Mitarbeiter wurde erfolgreich gelöscht',

                        exceptionErrorMsg: 'Es ist ein Fehler aufgetreten. <br>Bitte überprüfen Sie die Internetverbindung und versuchen Sie es erneut.<br><br>Aktualisieren Sie Ihre App?',
                    };
                break;

                case 'user':
                    lang_obj = {
                        title: 'Benutzerdaten',
                        userName: 'Name und Nachname',
                        userEmail: 'E-Mail',
                        userImage: 'Bild',
                        userPassword: 'Kennwort',
                        userAddress: 'Adresse',
                        userCity: 'Stadt',
                        userOIB: 'Identifikationsnummer',
                        userCompany: 'Firma',
                        employeePermission: 'Anmeldung/Abmeldung des Mitarbeiterfahrzeuges',
                        userAppLang: 'Anwendungssprache',

                        userPlaceholder: 'Neues Kennwort erstellen...',

                        adminEditRole: 'Rolle bearbeiten',
                        currentUserRole: 'Derzeitige Benutzerrolle',

                        successEditRole: 'Benutzerrolle erfolgreich bearbeitet.',
                        failureEditRole: 'Bearbeitung der Benutzerrolle fehlgeschlagen.',

                        deleteUserMsg_1: 'Benutzer',
                        deleteUserMsg_2: 'erfolgreich gelöscht',

                        insertUserImage: 'Bild wurde erfolgreich geändert.',
                        removeUserImage: 'Bild wurde erfolgreich gelöscht',
                        userDetailsUpdate: 'Erfolgreiche Aktualisierung der Daten.',
                    };
                break;

                case 'vehicles':
                    lang_obj = {
                        title: 'Fahrzeuge',
                        addVehicle: 'Fahrzeug hinzufügen',
                        editVehicle: 'Fahrzeug bearbeiten',
                        deleteVehicle: 'Fahrzeug löschen',
                        chooseVehicle: 'Fahrzeug auswählen',
                        chooseDriver: 'Fahrer auswählen',
                        noResults: 'Keine Suchergebnisse',
                        vehicleDetails: 'Details des Fahrzeuges',

                        searchVehicle: 'Suchen Sie nach dem Fahrzeug',

                        deleteConfirmation: 'Löschbestätigung',
                        deleteConfirmationText: 'Sind Sie sicher, dass Sie dieses Fahrzeug löschen möchten?',

                        assignVehicle: 'Derzeit ist Ihnen kein Fahrzeug zugewiesen.',


                        image: 'Bild',
                        name: 'Name',
                        type: 'Typ',
                        color: 'Farbe',
                        mark: 'Marke',
                        model: 'Modell',
                        year: 'Jahr',
                        license_plate: 'Autokennzeichen',
                        kilometers: 'Kilometerstand',
                        fuel_type: 'Treibstoff',
                        tire_dimensions: 'Reifendimension',
                        driver: 'Fahrer',
                        activity: 'Aktivität',
                        currentDriver: 'Aktueller Fahrer',
                        changeDriver: 'Fahrer wechseln',


                        deleteVehicleMsg_1: 'Fahrzeug',
                        deleteVehicleMsg_2: 'erfolgreich gelöscht',

                        privateDriver: 'Sie sind der Fahrzeugführer.',




                        // Image positions
                        posA1: 'Vorderreifen',
                        posA2: 'Hinterreifen',
                        posA3: 'Vordere Seitenscheibe',
                        posA4: 'Hintere Seitenscheibe',
                        posA5: 'Vordertür',
                        posA6: 'Hintertür',
                        posA7: 'Vordere Stoßstange',
                        posA8: 'Vordere Scheinwerfer',
                        posA9: 'Hintere scheinwerfer',
                        posA10: 'Hintere Stoßstange',
                        posA11: 'Untere Stoßstange',
                        posA12: 'Vorderer Kotflügel',
                        posA13: 'Hinterer Kotflügel',

                        posB1: 'Motor',
                        posB2: 'Motorhaube',
                        posB3: 'Vordere Fensterscheibe',
                        posB4: 'Scheibenwischer',
                        posB5: 'Rückspiegel',
                        posB6: 'Dach',
                        posB7: 'Hintere Fensterscheibe',
                        posB8: 'Kofferraumdeckel',
                        posB9: 'Auspuff',


                        type1: 'Persönliches Fahrzeug',
                    };
                break;

                case 'fuel':
                    lang_obj = {
                        title: 'Treibstoff',
                        filterByTitle: 'Filtern nach Name/Autokennzeichen',
                        filterByFiller: 'Nach Zeiger filtern',
                        filterByKM: 'Nach pro Kilometer filtern',
                        filterByLiters: 'Filter pro Liter',
                        filterByPrice: 'Nach Preis filtern',
                        filterByPricePerLiter: 'Nach Preis / Liter filtern',
                        filterByPriceKMLast: 'Nach Meile vom letzten Punkt filtern',
                        fill: 'Tanken',
                        fillList: 'Tanken-Liste',
                        vehicle: 'Fahrzeug',
                        filler: 'Füllstoff',
                        currentKilometers: 'Kilometerstand',
                        liters: 'Liter',
                        price: 'Preis',
                        date: 'Datum',
                        pricePerLiter: 'Preis / Liter',
                        lastKM: 'KZT',
                        lastKMtitle: 'Kilometer vom letzten Punkt entfernt',

                        editTitle: 'Tanken bearbeiten',
                        fieldRequired: 'Alle Felder erforderlich',

                        addFuel: 'Fill hinzufügen',

                        ownFuel: 'Meine Tanken',
                    };
                break;

                case 'malfunction':
                    lang_obj = {
                        title: 'Fehlfunktionen',

                        vehicleList: 'Liste der Fahrzeuge',
                        yourMalfunctionsList: 'Liste der Fehlfunktionen Ihrer Fahrzeuge',
                        insertMalfunction: 'Fehlfunktion eintragen',

                        //Insert form
                        malfunctionVozilo: 'Fahrzeug',
                        malfunctionName: 'Name',
                        malfunctionDetails: 'Details',
                        malfunctionDate: 'Zeitpunkt der Fehlfunktion',
                        malfunctionEndDate: 'Enddatum der Reparatur',
                        malfunctionStatus: 'Status',
                        malfunctionKilometersTraveled: 'Kilometerstand',
                        malfunctionImagePosition: 'Position',
                        malfunctionSelectImagePosition: 'Wählen Sie eine Position',
                        malfunctionCost: 'Ausgabe',

                        fieldRequired: 'Alle Felder erforderlich',

                        malfunctionSearchPosition: 'Suche die Position',
                        malfunctionShowDetails: 'Details der Fehlfunktion anzeigen',
                        deleteConfirmation: 'Bestätigung der Löschung',
                        deleteConfirmationText: 'Sind Sie sicher, dass Sie den Fehler löschen?',
                        noMalfunction: 'Sie haben zu diesem Zeitpunkt keine Funktionsstörungen.',


                        reminderMalfunctionComplete: 'Behoben',
                        reminderMalfunctionPending: 'Anstehend',
                        reminderMalfunctionFailed: 'Verzögert',

                        //hover text "Completed date xxxx-xx-xx"
                        date: 'Datum',

                        ownMalfunctions: 'Meine Fehler',
                        malfunctionDetailsTitle: 'Details der Fehlfunktion',

                        showImages: 'Zeige Bilder',
                        imageBeforeTitle: 'Bild der Fehlfunktion',
                        imageAfterTitle: 'Bild nach der Reparatur',


                        malfunctionInsertImages: 'Möchten Sie ein Bild der Fehlfunktion eingeben?',
                        imageBeforeNotFound: 'Bild der Fehlfunktion nicht vorhanden.',
                        imageAfterNotFound: 'Bild nach der Reparatur nicht vorhanden.',

                        addMalfunctionCategory: 'Fügen Sie eine neue Position hinzu',

                        malfunctionPagination: 'Fehlfunktion', //pagination


                        //Monitoring
                        monitoringTitle: 'Tracking',
                        malfunctionFailed: 'verzögerte',
                        malfunctionPending: 'bald',

                        createReminder: 'Erstellen Mahnung',

                        completedUser: 'abgeschlossene Fehlfunktion',
                    };
                break;

                case 'reminder':
                    lang_obj = {
                        title: 'Mahnungen',
                        remindersList: 'Liste der Mahnungen',
                        addReminder: 'Fügen Sie eine Mahnung hinzu',
                        editReminder: 'Bearbeiten Mahnung',
                        deleteReminder: 'Löschen Sie eine Mahnung',

                        detailsReminder: 'Details von Mahnung',
                        deleteConfirmation: 'Bestätigung der Löschung',
                        deleteConfirmationText: 'Möchten Sie eine Mahnung wirklich löschen?',

                        reminderVehicle: 'Fahrzeug',
                        reminderName: 'Name',
                        reminderCategory: 'Kategorie',
                        reminderDetails: 'Details',
                        reminderDate: 'Datum',
                        reminderStatus: 'Status',

                        addReminderCategory: 'Neue Kategorie hinzufügen',

                        reminderShowDetails: 'Mahnungsdetails anzeigen',


                        deleteReminderMsg_1: 'Mahnung',
                        deleteReminderMsg_2: 'erfolgreich gelöscht',

                        reminderCompleteUpdate: 'Erfolgreich gestaltete Mahnung',

                        //Monitoring
                        remindersFailed: 'verzögerte',
                        remindersPending: 'bald',

                        //after create vehicle
                        autoCreate1: 'Flüssigkeit zum Waschen von Fenstern <br/>&nbsp;&nbsp;&nbsp; - nach 7 Tagen',
                        autoCreate2: 'Feuerlöscher <br/>&nbsp;&nbsp;&nbsp; - nach einem Jahr',
                        autoCreate3: 'Reifen - nach 15.000 Kilometern',
                    };
                break;

                case 'report':
                    lang_obj = {
                        title: 'Berichte',

                        tabTitle: 'Bericht von',
                        dayTab: 'Tag',
                        userTab: 'Benutzer',
                        vehicleTab: 'Fahrzeug',

                        date: 'Datum',
                        dateFrom: 'Datum von',
                        dateTo: 'Datum zu',

                        fillerName: 'Füllername',
                    };
                break;

                case 'workOrder':
                    lang_obj = {
                        title: 'Arbeitsaufträge',

                        tabTitle: 'Arbeitsauftrag von',
                        tabDay: 'Tag',
                        tabMonth: 'Monat',
                        tabNewOrder: 'Neue Bestellung',

                        addOrder: 'Fügen Sie eine Bestellung hinzu',
                        date: 'Datum',
                        relation: 'Relation',
                        vehicle: 'Fahrzeug',
                        creator: 'Benutzer',
                        kilometers_before: 'Anfangszustand (km)',
                        kilometers_after: 'Endgültiger Zustand (km)',
                        kilometers_traveled: 'Gekreuzte Kilometer',
                        visit_time: 'Besuchszeit',
                        remark: 'Anmerkung',
                        counter: 'Zähler',

                        chooseCreator: 'Auszuwählen Fahrer',
                        filterByCreator: 'Nach Fahrer filtern',

                        editWorkOrder: 'Bearbeiten Sie einen Arbeitsauftrag',

                        fieldRequired: 'Alle Felder sind Pflichtfelder',


                        workOrderList: 'Liste der Arbeitsaufträge',

                        //PDF
                        pdfTitle: 'Reise Work Order',
                        vehicleMark: 'Ein Fahrzeugmarke',
                        licensePlate: 'Fahrzeug-Registrierungskennzeichen',
                        applicant: 'der Antragsteller für die Berechnung',
                        director: 'Direktor',
                        calculation: 'Rechnung',
                        total: 'Gesamtsumme',

                        from: 'von',
                        to: 'zu',
                    };
                break;
            }
			
			
			
        break;
    }



    return lang_obj;

}