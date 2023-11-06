function onPageLoaded(args) {
    const page = args.object;

    const timelineItems = [
        {
            year: '2023 - Present',
            entries: [
                { title: 'Front-End Developer', subtitle: 'LimeLight Marketing' },
                { title: 'Project Manager', subtitle: 'Pitt State CS Club' },
            ],
        },
        {
            year: '2022 - 2023',
            entries: [
                { title: 'Webflow Developer & Co-Founder', subtitle: 'Designflow Studio' },
                { title: 'Web Designer', subtitle: 'Freelance' },
                { title: 'Leader Team of Marketing', subtitle: 'AHA Marketing Agency' },
            ],
        },
        {
            year: '2010 - 2013',
            entries: [
                { title: 'Bachelor Degree of Information Technology', subtitle: 'US RMIT University' },
            ],
        },
    ];

    const skills = [
        { name: 'HTML', icon: '➤' },
        { name: 'CSS', icon: '➤' },
        { name: 'Java', icon: '➤' },
        { name: 'Tailwind', icon: '➤' },
        { name: 'Bootstrap', icon: '➤' },
        { name: 'Squarespace', icon: '➤' },
        { name: 'Wix', icon: '➤' },
        { name: 'Adobe Lightroom', icon: '➤' },
        { name: 'Adobe Photoshop', icon: '➤' },
    ];
    
    page.bindingContext = {
        timelineItems: timelineItems,
        skills: skills,
    };
}

exports.onPageLoaded = onPageLoaded;

