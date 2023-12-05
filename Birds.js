
// all images and information obtained from:
// https://www.rspb.org.uk/birds-and-wildlife/a-z?search=sparrow

// populations made up

const birds = [

    {
        name:'House Sparrow',
        asset:require('./assets/HouseSparrow.jpg'),
        description:"These noisy and sociable birds are found around the world, thanks to their cheerful ability to make the most of humanity's rubbish and wastefulness. But monitoring suggests a severe decline in the UK House Sparrow population, recently estimated as dropping by 71 per cent between 1977 and 2008 with large falls in both rural and urban populations. Their numbers are still dropping in England, Breeding Bird Survey data indicates recent population increases in Scotland, Wales and Northern Ireland.",
        population:12, // millions
    },
    {
        name:'Blue Tit',
        asset:require('./assets/BlueTit.jpg'),
        description:"A colourful mix of blue, yellow, white and green makes the Blue Tit one of our most attractive and most recognisable garden visitors. In winter, family flocks join up with other tits as they search for food. A garden with four or five Blue Tits at a feeder at any one time may be feeding 20 or more.",
        population:10,
    },
    {
        name:'Starling',
        asset:require('./assets/Starling.jpg'),
        description:"Smaller than Blackbirds, Starlings have a short tail, pointed head and triangular wings. In their breeding plumage, they look black at a distance. When seen closer, they are very glossy with a sheen of purples and greens. Their feathers are also flecked with white and this is especially noticeable in their winter plumage, which is more brown with many bright white spots. Starling flight is fast and direct and they walk and run confidently on the ground. Noisy and social, Starlings spend a lot of the year in flocks. Starlings are fantastic mimics and can make a huge variety of tweets, cheeps, clicks and burrs. Still one of the most common garden birds, its decline elsewhere makes it a Red List species.",
        population:9,
    },
    {
        name:'Woodpigeon',
        asset:require('./assets/Woodpigeon.jpg'),
        description:"The UK's largest and commonest pigeon, the Woodpigeon is largely grey with a white neck patch and white wing patches, clearly visible in flight. Although shy in the countryside it can be tame and approachable in towns and cities. Its cooing call is a familiar sound in woodland as is the loud clatter of its wings when it flies away.",
        population:7,
    },
    {
        name:'Blackbird',
        asset:require('./assets/Blackbird.jpg'),
        description:"Male Blackbirds are black with a bright orange-yellow beak and yellow eye-ring. Females are brown often with spots and streaks on their breasts and brown beak. The Blackbird is one of the most common UK birds and one of the most striking. Its mellow song is also a favourite.",
        population:6,
    },
]

export default birds
