
const questions = [
    {
        question: "tropical moist forests do not include?",
        answers: [
            { text: "broadleaved forests", correct: true },
            { text: "wet evergreen forests", correct: false },
            { text: "semi-evergreen forests", correct: false },
            { text: "moist deciduous forests", correct: false }
        ]
    },
    {
        question: " which of these is not a use value?",
        answers: [
            { text: "direct value", correct: false },
            { text: "indirect value", correct: false },
            { text: "option value", correct: false },
            { text: "existence value", correct: true }
        ]
    },
    {
        question: " the value derived from the knowledge of use of resources by others in the current generation is called?",
        answers: [
            { text: "altruistic value", correct: true },
            { text: "bequest value", correct: false },
            { text: "existence value", correct: false },
            { text: "option value", correct: false }
        ]
    },
    {
        question: " montane sub-tropical forests do not involve?",
        answers: [
            { text: "broadleaved forests", correct: false },
            { text: "pine forests", correct: false },
            { text: "semi-evergreen forests", correct: true },
            { text: "dry evergreen forests", correct: false }
        ]
    },
    {
        question: " pant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy is?",
        answers: [
            { text: "silviculture definition of forests", correct: false },
            { text: "FAO definition of forests", correct: false },
            { text: "legal definition of forests ", correct: false },
            { text: "ecological definition of forests", correct: true }
        ]
    },
    {
        question: " which of these is not a consumptive value?",
        answers: [
            { text: "timber", correct: false },
            { text: "firewood", correct: false },
            { text: "non-timber forest products", correct: false },
            { text: "education", correct: true }
        ]
    },
    {
        question: " the term 'forest' originates from?",
        answers: [
            { text: "latin foris meaning outside", correct: true },
            { text: "greek foris meaning outside", correct: false },
            { text: "latin foris meaning trees", correct: false },
            { text: "greek foris meaning trees", correct: false }
        ]
    },
    {
        question: " the value of leaving use and non-use values for offspring's or future generation is called?",
        answers: [
            { text: "altruistic value", correct: false },
            { text: "bequest value", correct: true },
            { text: "existence value", correct: false },
            { text: "option value", correct: false }
        ]
    },
    {
        question: " which of these is not a forest type found in India?",
        answers: [
            { text: "mediterranean dry", correct: true },
            { text: "tropical dry", correct: false },
            { text: "montane temperate", correct: false },
            { text: "alpine", correct: false }
        ]
    },
    {
        question: " according to the supreme court, the term forest land includes?",
        answers: [
            { text: "some area recorded as forest in the government record according to ownership", correct: false },
            { text: "any area recorded as forest in the government record according to ownership", correct: false },
            { text: "some area recorded as forest in the government record irrespective of ownership", correct: false },
            { text: "any area recorded as forest in the government record irrespective of ownership", correct: true }
        ]
    },
    {
        question: "In the context of plant nutrition, boron is",
        answers: [
            {text: "macronutrient", correct: false},
            {text: "micronutrient", correct: true},
            {text: "primary nutrient", correct: false},
            {text: "secondary nutrient", correct: false}
        ]
    },
    {
        question: "The art and science of cultivating forest crops is called",
        answers: [
            {text: "foresticulture", correct: false},
            {text: "monoculture", correct: false},
            {text: "silviculture", correct: true},
            {text: "silvics", correct: false}
        ]
    },
    {
        question: "The climax near Tindi village is being controlled by disturbance by cattle. This is an example of",
        answers: [
            {text: "climatic climax", correct: false},
            {text: "edaphic climax", correct: false},
            {text: "disclimax", correct: true},
            {text: "catastrophic climax", correct: false}
        ]
    },
    {
        question: "Which of these is not a characteristic of pioneer species",
        answers: [
            {text: "ability to grow on bare rocks", correct: false},
            {text: "ability to tolerate extreme temperatures", correct: false},
            {text: "large size", correct: true},
            {text: "short lifespan", correct: false}
        ]
    },
    {
        question: "Which of these depicts correctly the lithosere primary succession?",
        answers: [
            {text: "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax", correct: true},
            {text: "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax", correct: false},
            {text: "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax", correct: false}
        ]
    },
    {
        question: "The study of life history/general features of forest crops with respect to environmental factors is called",
        answers: [
            {text: "foresticulture", correct: false},
            {text: "monoculture", correct: false},
            {text: "silviculture", correct: false},
            {text: "silvics", correct: true}
        ]
    },
    {
        question: "Net primary productivity is given by",
        answers: [
            {text: "APAR + LUE", correct: false},
            {text: "APAR X LUE", correct: true},
            {text: "APAR - LUE", correct: false},
            {text: "APAR / LUE", correct: false}
        ]
    },
    {
        question: "A climax caused by wildfires is an example of",
        answers: [
            {text: "climatic climax", correct: false},
            {text: "edaphic climax", correct: false},
            {text: "disclimax", correct: false},
            {text: "catastrophic climax", correct: true}
        ]
    },
    {
        question: "Practical application of scientific, technical, and economic principles of forestry comes under which branch of forestry?",
        answers: [
            {text: "forest management", correct: true},
            {text: "forest economics", correct: false},
            {text: "forest mensuration", correct: false},
            {text: "forest protection", correct: false}
        ]
    },
    {
        question: "Which of these is an abiotic factor?",
        answers: [
            {text: "vines", correct: false},
            {text: "trees", correct: false},
            {text: "reptiles", correct: false},
            {text: "water", correct: true}
        ]
    },
    {
        question: "Regur is a term for",
        answers: [
            {text: "black cotton soil", correct: true},
            {text: "alluvial soil", correct: false},
            {text: "saline soil", correct: false},
            {text: "red and yellow soil", correct: false}
        ]
    },
    {
        question: "Carbonation is an example of",
        answers: [
            {text: "chemical weathering", correct: true},
            {text: "physical weathering", correct: false},
            {text: "biological weathering", correct: false},
            {text: "none of these", correct: false}
        ]
    },
    {
        question: "Banger is a type of",
        answers: [
            {text: "black cotton soil", correct: false},
            {text: "alluvial soil", correct: true},
            {text: "saline soil", correct: false},
            {text: "red and yellow soil", correct: false}
        ]
    },
    {
        question: "Cryofacturing is an example of",
        answers: [
            {text: "chemical weathering", correct: false},
            {text: "physical weathering", correct: true},
            {text: "biological weathering", correct: false},
            {text: "none of these", correct: false}
        ]
    },
    {
        question: "In soil profile, C refers to",
        answers: [
            {text: "organic surface layer", correct: false},
            {text: "topsoil layer", correct: false},
            {text: "subsoil layer", correct: false},
            {text: "substratum layer", correct: true}
        ]
    },
    {
        question: "Vertical arrangement of soil horizon is called",
        answers: [
            {text: "soil texture", correct: false},
            {text: "soil structure", correct: false},
            {text: "soil profile", correct: true},
            {text: "soil science", correct: false}
        ]
    },
    {
        question: "Thermal stresses lead to",
        answers: [
            {text: "chemical weathering", correct: false},
            {text: "physical weathering", correct: true},
            {text: "biological weathering", correct: false},
            {text: "none of these", correct: false}
        ]
    },
    {
        question: "Khadar is a type of",
        answers: [
            {text: "black cotton soil", correct: false},
            {text: "alluvial soil", correct: true},
            {text: "saline soil", correct: false},
            {text: "red and yellow soil", correct: false}
        ]
    },
    {
        question: "Hydrolysis is an example of",
        answers: [
            {text: "chemical weathering", correct: true},
            {text: "physical weathering", correct: false},
            {text: "biological weathering", correct: false},
            {text: "none of these", correct: false}
        ]
    },
    {
        question: "Which of these has the highest organic matter content",
        answers: [
            {text: "peaty soil", correct: true},
            {text: "alluvial soil", correct: false},
            {text: "saline soil", correct: false},
            {text: "red and yellow soil", correct: false}
        ]
    },
    {
        question: "Measurement of height based on similar triangles comes under",
        answers: [
            {text: "similar measurement", correct: false},
            {text: "dissimilar measurement", correct: false},
            {text: "direct measurement", correct: false},
            {text: "indirect measurement", correct: true}
        ]
    },
    {
        question: "For normal form factor, the reference of the base of the cylinder is",
        answers: [
            {text: "base of the tree", correct: false},
            {text: "breast height", correct: false},
            {text: "10% of tree height", correct: true},
            {text: "20% of tree height", correct: false}
        ]
    },
    {
        question: "In a triangle, the angle between base and hypotenuse, theta= 60 degree and the hypotenuse c = 2cm. Find the length of the base b",
        answers: [
            {text: "0.33", correct: false},
            {text: "0.5", correct: false},
            {text: "0.75", correct: false},
            {text: "1", correct: true}
        ]
    },
    {
        question: "3 trees are located in a sample plot of 15m X 15m. Their dbh are as under: dbh= 25cm, 30cm, 35cm. Find the stand basal area in sq m per Ha",
        answers: [
            {text: "9.6", correct: true},
            {text: "14.6", correct: false},
            {text: "21.6", correct: false},
            {text: "27.6", correct: false}
        ]
    },
    {
        question: "Consider a stand of eucalyptus, trees that are on average 30cm in diameter and spaced on a regular 3m grid. Find the spacing factor",
        answers: [
            {text: "5", correct: false},
            {text: "10", correct: true},
            {text: "15", correct: false},
            {text: "Data insufficient", correct: false}
        ]
    },
    {
        question: "For a tree with dbh= 45.6cm, height= 27m and total stem volume of 1.78cum, the artificial form factor of the tree is:",
        answers: [
            {text: "0.1", correct: false},
            {text: "0.2", correct: false},
            {text: "0.3", correct: false},
            {text: "0.4", correct: true}
        ]
    },
    {
        question: "For the absolute form factor, the reference for the base of the cylinder is",
        answers: [
            {text: "base of the tree", correct: true},
            {text: "breast height", correct: false},
            {text: "10% of the height", correct: false},
            {text: "20% of the height", correct: false}
        ]
    },
    {
        question: "Diameter over bark (dob), diameter under bark (dub) and the bark thickness (tb) are related as",
        answers: [
            {text: "dob = dub + tb", correct: false},
            {text: "dob = dub - tb", correct: false},
            {text: "dob = dub + 2 X tb", correct: true},
            {text: "dob = dub - 2 X tb", correct: false}
        ]
    },
    {
        question: "Choose the correct statement",
        answers: [
            {text: "For a non-circular section, girth tape over-estimates the sectional area", correct: true},
            {text: "For a non-circular section, girth tape under-estimates the sectional area", correct: false},
            {text: "For a non-circular section, girth tape correctly-estimates the sectional area", correct: false},
            {text: "None of these is a correct statement", correct: false}
        ]
    },
    {
        question: "A tree has dbh of 25cm. Find the basal area in sq m",
        answers: [
            {text: ".049", correct: true},
            {text: ".096", correct: false},
            {text: ".149", correct: false},
            {text: ".195", correct: false}
        ]
    },
    {
        question: "The frequency of flyovers is an indicator of",
        answers: [
            {text: "spatial resolution", correct: false},
            {text: "temporal resolution", correct: true},
            {text: "spectral resolution", correct: false},
            {text: "radiometric resolution", correct: false}
        ]
    },
    {
        question: "____ is how close the measured values are to the correct value",
        answers: [
            {text: "accuracy", correct: true},
            {text: "precision", correct: false},
            {text: "bias", correct: false},
            {text: "variance", correct: false}
        ]
    },
    {
        question: "This sampling employs a simple rule of selecting every k unit starting with a number chosen at random from 1 to k as the random start. We are talking about",
        answers: [
            {text: "simple random sampling", correct: false},
            {text: "systematic sampling", correct: true},
            {text: "stratified sampling", correct: false},
            {text: "multistage sampling", correct: false}
        ]
    },
    {
        question: "A list of sampling units is called a",
        answers: [
            {text: "frame", correct: true},
            {text: "window", correct: false},
            {text: "sample", correct: false},
            {text: "population", correct: false}
        ]
    },
    {
        question: "Which of these is correct?",
        answers: [
            {text: "Plane surveying takes into account the true shape of the earth and is used for smaller areas (<250 sq km)", correct: false},
            {text: "Plane surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)", correct: false},
            {text: "Geodetic surveying takes into account the true shape of the earth and is used for smaller areas (<250 sq km)", correct: false},
            {text: "Geodetic surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)", correct: true}
        ]
    },
    {
        question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
        answers: [
            {text: "Simple random sampling", correct: true},
            {text: "Systematic sampling", correct: false},
            {text: "Stratified sampling", correct: false},
            {text: "Multistage sampling", correct: false}
        ]
    },
    {
        question: "Bathymetric LiDAR uses",
        answers: [
            {text: "Far infrared light", correct: false},
            {text: "Near infrared light", correct: false},
            {text: "Orange light", correct: false},
            {text: "Green light", correct: true}
        ]
    },
    {
        question: "IMU stands for",
        answers: [
            {text: "Imperial metering unit", correct: false},
            {text: "Inertial metering unit", correct: false},
            {text: "Imperial measurement unit", correct: false},
            {text: "Inertial measurement unit", correct: true}
        ]
    },
    {
        question: "____ is how close the measured values are to each other",
        answers: [
            {text: "Accuracy", correct: false},
            {text: "Precision", correct: true},
            {text: "Bias", correct: false},
            {text: "Variance", correct: false}
        ]
    },
    {
        question: "The time of flight of LiDAR is 0.00001 sec. Find the distance of the object from the instrument",
        answers: [
            {text: "500m", correct: false},
            {text: "1000m", correct: false},
            {text: "1500m", correct: true},
            {text: "2000m", correct: false}
        ]
    },
    {
        question: "A site was clear-cut. Which of these methods of regeneration cannot be used in a short time-frame?",
        answers: [
            { text: "natural regeneration", correct: true },
            { text: "artificial regeneration by direct sowing", correct: false },
            { text: "artificial regeneration by planting seedlings", correct: false },
            { text: "artificial regeneration by transplanting trees", correct: false }
        ]
    },
    {
        question: "The average age at which a tree is considered mature for felling is called as:",
        answers: [
            { text: "crop age", correct: false },
            { text: "felling age", correct: false },
            { text: "rotation age", correct: true },
            { text: "maturity age", correct: false }
        ]
    },
    {
        question: "Which of these is not a feature of natural regeneration?",
        answers: [
            { text: "low cost", correct: false },
            { text: "less requirement of heavy machinery and labour", correct: false },
            { text: "preservation of genetic variability", correct: false },
            { text: "good quality over genetic improvement", correct: true }
        ]
    },
    {
        question: "Ring weeding is primarily a feature of:",
        answers: [
            { text: "natural generation", correct: false },
            { text: "assisted natural regeneration", correct: true },
            { text: "artificial regeneration by direct sowing", correct: false },
            { text: "artificial regeneration by planting seedlings", correct: false }
        ]
    },
        {
        question: "The movement of seeds away from their place of seed production into a new area is called:",
        answers: [
            { text: "translocation", correct: false },
            { text: "migration", correct: false },
            { text: "dispersal", correct: true },
            { text: "drifting", correct: false }
        ]
    },
    {
        question: "Which of these is not a feature of natural regeneration?",
        answers: [
            { text: "seed consumption by insects and seed feeders", correct: false },
            { text: "little control over spacing and stand density", correct: false },
            { text: "long time needed to regenerate forest", correct: false },
            { text: "high requirement of heavy machinery and labour", correct: true }
        ]
    },
    {
        question: "Which of these is the correct sequence of a silviculture system?",
        answers: [
            { text: "stand tending --> regeneration --> harvesting", correct: false },
            { text: "harvesting --> stand tending --> regeneration", correct: false },
            { text: "harvesting --> regeneration --> stand tending", correct: true },
            { text: "regeneration --> harvesting --> stand tending", correct: false }
        ]
    },
    {
        question: "Which of these is not an advantage of clear felling system?",
        answers: [
            { text: "simple system, easy and efficient", correct: false },
            { text: "allows for establishment of a more uniform crop", correct: false },
            { text: "increases soil erosion and landslides in hilly areas", correct: true },
            { text: "mimics natural processes of fire and large scale insect attacks", correct: false }
        ]
    },
    {
        question: "Tending is done during:",
        answers: [
            { text: "early stage of life", correct: false },
            { text: "middle stage of life", correct: false },
            { text: "late stage of life", correct: false },
            { text: "any stage of life", correct: true }
        ]
    },
    {
        question: "Taungya regeneration is:",
        answers: [
            { text: "natural regeneration", correct: false },
            { text: "artificial regeneration with villagers", correct: true },
            { text: "artificial regeneration with nomadic tribes", correct: false },
            { text: "artificial regeneration with hunters and gatherers", correct: false }
        ]
    },
    {
        question: "Trees not putting increment are removed during",
        answers: [
          { text: "preparatory felling", correct: true },
          { text: "seeding felling", correct: false },
          { text: "secondary felling", correct: false },
          { text: "final felling", correct: false }
        ]
    },
    {
        question: "For a crop with rotation age 120 years, PB-III would have crop age",
        answers: [
          { text: "0-30 years", correct: false },
          { text: "30-60 years", correct: true },
          { text: "60-90 years", correct: false },
          { text: "90-120 years", correct: false }
        ]
    },
    {
        question: "Close to nature forestry is a feature of",
        answers: [
          { text: "clear felling system", correct: false },
          { text: "selection system", correct: true },
          { text: "uniform shelterwood system", correct: false },
          { text: "group shelterwood system", correct: false }
        ]
    },
    {
        question: "Shelterwood system results in",
        answers: [
          { text: "even aged stand with natural aesthetics", correct: true },
          { text: "even aged stand with artificial aesthetics", correct: false },
          { text: "uneven aged stand with natural aesthetics", correct: false },
          { text: "uneven aged stand with artificial aesthetics", correct: false }
        ]
    },
    {
        question: "Inverse-J number diameter curves are seen in",
        answers: [
          { text: "clear felling system", correct: false },
          { text: "selection system", correct: true },
          { text: "uniform shelterwood system", correct: false },
          { text: "group shelterwood system", correct: false }
        ]
    },
    {
        question: "Clear felling system is not used for",
        answers: [
          { text: "light demanding species", correct: false },
          { text: "shade bearer species", correct: true },
          { text: "plain areas", correct: false },
          { text: "plateau areas", correct: false }
        ]
    },
    {
        question: "Which of these is the correct sequence for shelterwood system",
        answers: [
          { text: "preparatory felling --> secondary felling --> seedling feeling --> final felling", correct: false },
          { text: "preparatory felling --> seedling felling --> secondary felling --> final felling", correct: false },
          { text: "preparatory felling --> secondary felling --> seedling felling --> final felling", correct: false },
          { text: "preparatory felling --> seeding felling --> secondary felling --> final felling", correct: true }
        ]
    },
    {
        question: "Felling made with the object of opening the canopy to remove shelter and allow more light for the regenerated crop is",
        answers: [
          { text: "preparatory felling", correct: false },
          { text: "seedling felling", correct: false },
          { text: "secondary felling", correct: true },
          { text: "final felling", correct: false }
        ]
    },
    {
        question: "In group shelterwood system, the regeneration area is increased",
        answers: [
          { text: "centrifugally around gaps", correct: true },
          { text: "centripetally around gaps", correct: false },
          { text: "parallel to gaps", correct: false },
          { text: "perpendicular to gaps", correct: false }
        ]
    },
    {
        question: "Catchment areas are best suited for",
        answers: [
          { text: "clear felling system", correct: false },
          { text: "selection system", correct: true },
          { text: "uniform shelterwood system", correct: false },
          { text: "group shelterwood system", correct: false }
        ]
    },
    {
        question: "Moving logs from forest to landing area is known as",
        answers: [
          { text: "marking", correct: false },
          { text: "bucking", correct: false },
          { text: "skidding", correct: true },
          { text: "delimbing", correct: false }
        ]
    },
    {
        question: "Research plots are shown in _____ marking colour",
        answers: [
          { text: "yellow", correct: false },
          { text: "blue", correct: false },
          { text: "red", correct: false },
          { text: "white", correct: true }
        ]
    },
    {
        question: "Which of these gives the greatest accuracy in constructing face cuts",
        answers: [
          { text: "conventional face", correct: true },
          { text: "humboldt face", correct: false },
          { text: "open face", correct: false },
          { text: "all of these", correct: false }
        ]
    },
    {
        question: "Careful selection of trees for harvesting based on a forest management prescription is known as",
        answers: [
          { text: "surveying", correct: false },
          { text: "cruising", correct: false },
          { text: "marking", correct: true },
          { text: "logging", correct: false }
        ]
    },
    {
        question: "Surveying timberlands to locate and estimate the volumes and grades of standing timber meeting requirements is known as",
        answers: [
          { text: "surveying", correct: false },
          { text: "cruising", correct: true },
          { text: "marking", correct: false },
          { text: "logging", correct: false }
        ]
    },
    {
        question: "Trees on boundary are shown in ____ marking colour",
        answers: [
          { text: "yellow", correct: false },
          { text: "blue", correct: false },
          { text: "red", correct: true },
          { text: "white", correct: false }
        ]
    },
    {
        question: "Cutting of timber into logs is known as",
        answers: [
          { text: "marking", correct: false },
          { text: "bucking", correct: true },
          { text: "skidding", correct: false },
          { text: "delimbing", correct: false }
        ]
    },
    {
        question: "Which of these gives the greatest saving of lumber",
        answers: [
          { text: "conventional face", correct: false },
          { text: "humboldt face", correct: true },
          { text: "open face", correct: false },
          { text: "all of these", correct: false }
        ]
    },
    {
        question: "Trees to be retained are shown in ______ marking colour",
        answers: [
          { text: "yellow", correct: false },
          { text: "blue", correct: true },
          { text: "red", correct: false },
          { text: "white", correct: false }
        ]
    },
    {
        question: "Net growth in initial volume is given by",
        answers: [
          { text: "V2 - V1", correct: false },
          { text: "V2 - V1 + H + I", correct: true },
          { text: "V2 - V1 + H + 1 + M", correct: false },
          { text: "V2 - V1 + H - 1 - M", correct: false }
        ]
    },
    {
        question: "Shell cracking of seeds is used for which species",
        answers: [
          { text: "amla", correct: false },
          { text: "mango", correct: false },
          { text: "ber", correct: true },
          { text: "teak", correct: false }
        ]
    },
    {
        question: "Wet and dry treatment of seeds is used for which species",
        answers: [
          { text: "amla", correct: false },
          { text: "mango", correct: false },
          { text: "ber", correct: false },
          { text: "teak", correct: true }
        ]
    },
    {
        question: "Agave is used for",
        answers: [
          { text: "barbed wire fencing", correct: false },
          { text: "live fencing", correct: true },
          { text: "chain link fencing", correct: false },
          { text: "stone wall fencing", correct: false }
        ]
    },
    {
        question: "Which of these is not a laboratory method to determine best days for seed collection?",
        answers: [
          { text: "maximum dry weight", correct: false },
          { text: "colour of fruits", correct: true },
          { text: "moisture contents of fruits", correct: false },
          { text: "chemical analysis of fat and nitrogen content", correct: false }
        ]
    },
    {
        question: "Which of these characterizes a refractory site",
        answers: [
          { text: "soil depth < 10cm", correct: true },
          { text: "soil depth 10-30cm", correct: false },
          { text: "soil depth > 30cm", correct: false },
          { text: "none of these", correct: false }
        ]
    },
    {
        question: "Which of these is a good storage condition",
        answers: [
          { text: "high moisture, high temperature", correct: false },
          { text: "high moisture, low temperature", correct: false },
          { text: "low moisture, high temperature", correct: false },
          { text: "low moisture, low temperature", correct: true }
        ]
    },
    {
        question: "Which of these prevents waterlogging",
        answers: [
          { text: "sunken bed", correct: false },
          { text: "raised bed", correct: true },
          { text: "flat bed", correct: false },
          { text: "all of these", correct: false }
        ]
    },
    {
        question: "Choice of spacing is dependent upon",
        answers: [
          { text: "objective of plantation", correct: false },
          { text: "site-species matching", correct: false },
          { text: "growth rate", correct: false },
          { text: "all of these", correct: true }
        ]
    },
    {
        question: "Which of these conserves moisture",
        answers: [
          { text: "sunken bed", correct: true },
          { text: "raised bed", correct: false },
          { text: "flat bed", correct: false },
          { text: "all of these", correct: false }
        ]
    },
    {
        question: "Number of seeds in a sample that germinate up to the peak germination period expressed as a percentage is a definition of",
        answers: [
          { text: "germination number", correct: false },
          { text: "germination percentage", correct: false },
          { text: "germination energy", correct: true },
          { text: "germination power", correct: false }
        ]
    },
    {
        question: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
        answers: [
          { text: "umbrella species", correct: false },
          { text: "keystone species", correct: false },
          { text: "flagship species", correct: false },
          { text: "all of the above", correct: true }
        ]
    },
    {
        question: "Zoo is an example of",
        answers: [
          { text: "in-situ conservation", correct: false },
          { text: "ex-situ conservation", correct: true },
          { text: "in-situ preservation", correct: false },
          { text: "ex-situ preservation", correct: false }
        ]
    },
    {
        question: "Sustainable harvest of resources falls under the category of",
        answers: [
          { text: "conservation", correct: true },
          { text: "preservation", correct: false },
          { text: "environmentalism", correct: false },
          { text: "none of the above", correct: false }
        ]
    },
    {
        question: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
        answers: [
          { text: "very high", correct: false },
          { text: "medium", correct: true },
          { text: "very low", correct: false },
          { text: "non-existent", correct: false }
        ]
    },
    {
        question: "Captive breeding is an example of",
        answers: [
          { text: "in-situ conservation", correct: false },
          { text: "ex-situ conservation", correct: true },
          { text: "in-situ preservation", correct: false },
          { text: "ex-situ preservation", correct: false }
        ]
    },
    {
        question: "Which of these is not a forest classification as per the 1894 forest policy",
        answers: [
          { text: "protection forest", correct: false },
          { text: "production forest", correct: false },
          { text: "minor forest", correct: false },
          { text: "major forest", correct: true }
        ]
    },
    {
        question: "In 1931, Van Panchayats were constituted in areas that are now in",
        answers: [
          { text: "Tamil Nadu", correct: false },
          { text: "Madhya Pradesh", correct: false },
          { text: "West Bengal", correct: false },
          { text: "Uttarakhand", correct: true }
        ]
    },
    {
        question: "Planting along canal banks is a part of",
        answers: [
          { text: "farm forestry", correct: false },
          { text: "community forestry", correct: false },
          { text: "extension forestry", correct: true },
          { text: "agroforestry", correct: false }
        ]
    },
    {
        question: "The fig tree bears fruits in time when animals do not have much access to food. In this context, it would be a good example of",
        answers: [
          { text: "least concern species", correct: false },
          { text: "keystone species", correct: true },
          { text: "flagship species", correct: false },
          { text: "extinct species", correct: false }
        ]
    },
    {
        question: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destruction feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
        answers: [
          { text: "umbrella species", correct: false },
          { text: "keystone species", correct: false },
          { text: "flagship species", correct: false },
          { text: "all of the above", correct: true }
        ]
    },
    {
        question: "A tree has DBH of 35cm. Find the basal area in square meters.",
        answers: [
          { text: "0.049", correct: false },
          { text: "0.096", correct: true },
          { text: "0.149", correct: false },
          { text: "0.195", correct: false }
        ]
    },
    {
        question: "In a triangle, the angle between base and hypotenuse theta = 60 degrees and hypotenuse c = 4cm. Find the length of the base b.",
        answers: [
          { text: "0.66", correct: false },
          { text: "1", correct: false },
          { text: "1.5", correct: false },
          { text: "2", correct: true }
        ]
    },
    {
        question: "\"Allowing some places and some creatures to exist without significant human interference\" is a definition of",
        answers: [
          { text: "conservation", correct: false },
          { text: "preservation", correct: true },
          { text: "environmentalism", correct: false },
          { text: "all of these", correct: false }
        ]
    },
    {
        question: "In India, the breast height is considered to be",
        answers: [
          { text: "1.37m", correct: true },
          { text: "1.47m", correct: false },
          { text: "1.57m", correct: false },
          { text: "2.47m", correct: false }
        ]
    },
    {
        question: "The term laterite soil is derived from Latin 'later' which means",
        answers: [
          { text: "red", correct: false },
          { text: "brick", correct: true },
          { text: "fertile", correct: false },
          { text: "infertile", correct: false }
        ]
    },
    {
        question: "Which of these is not a non-use value?",
        answers: [
          { text: "direct value", correct: true },
          { text: "existence value", correct: false },
          { text: "altruistic value", correct: false },
          { text: "bequest value", correct: false }
        ]
    },
    {
        question: "\"Science of the relationship between organisms and their environments\" is the definition of",
        answers: [
          { text: "conservation", correct: false },
          { text: "preservation", correct: false },
          { text: "environmentalism", correct: false },
          { text: "ecology", correct: true }
        ]
    },
    {
        question: "Self-ploughing character is seen in",
        answers: [
          { text: "black cotton soil", correct: true },
          { text: "alluvial soil", correct: false },
          { text: "saline soil", correct: false },
          { text: "red and yellow soil", correct: false }
        ]
    },
    {
        question: "Mechanical action of ocean waves is an example of",
        answers: [
          { text: "chemical weathering", correct: false },
          { text: "physical weathering", correct: true },
          { text: "biological weathering", correct: false },
          { text: "none of the above", correct: false }
        ]
    },
    {
        question: "Lithosere is an example of",
        answers: [
          { text: "hydrosere", correct: false },
          { text: "xerosere", correct: true },
          { text: "psammosere", correct: false },
          { text: "halosere", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();
