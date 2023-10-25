function onNavigatingTo(args) {
    const page = args.object;
    
    const timelineItems = [
        {
            year: '2020 - Present',
            entries: [
                { title: 'Framer Designer & Developer', subtitle: 'Brunodee Agency' },
                { title: 'Front-End WordPress Developer', subtitle: 'Envato Market' }
            ]
        },
        {
            year: '2013 - 2019',
            entries: [
                { title: 'Webflow Developer & Co-Founder', subtitle: 'Designflow Studio' },
                { title: 'Web Designer', subtitle: 'Freelance' },
                { title: 'Leader Team of Marketing', subtitle: 'AHA Marketing Agency' }
            ]
        },
        {
            year: '2010 - 2013',
            entries: [
                { title: 'Bachelor Degree of Information Technology', subtitle: 'US RMIT University' }
            ]
        }
    ];
    
    page.bindingContext = {
        timelineItems: timelineItems
    };
}

exports.onNavigatingTo = onNavigatingTo;
