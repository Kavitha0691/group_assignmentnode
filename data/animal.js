class Animal {
    constructor(name, weight, length, description, food, lifespan, found, group) {
        this.name = name;
        this.weight = weight;
        this.length = length;
        this.description = description;
        this.lifespan = lifespan;
        this.found = found;
        this.group = group;
        this.food = food;
    }
}

const mammals = [new Animal('Echida',
    '10',
    '76',
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short.They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    "insects such as ants and termites, beetle larvae and worms",
    "50",
    "Throughout Australia",
    "Mammals"
),
new Animal('Tasmanian Devil',
    '10kg',
    '70cm',
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    "A predator, then eat meat from other animals such as wallabies and wombats",
    "5",
    "Tasmania",
    "Mammals"
),
new Animal('Quokka',
    "3",
    "50",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    "Plant eaters, they munch on shrubs and grasses",
    "10",
    "Only found on Rottnest Island and a few places on mainland Western Australia",
    "Mammals"
)]

const birds = [new Animal('')];