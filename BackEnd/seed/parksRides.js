const db = require('../db')
const { Park, Ride } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const main = async () => {
        const sixflags_nj = await new park({
          name: "Six Flags Great Adventure",
          description: "Six Flags Great Adventure is an amusement park located in Jackson, New Jersey. Owned and operated by Six Flags, the park complex is situated between New York City and Philadelphia and includes a water park named Hurricane Harbor.",
          location: "Jackson Township, New Jersey",
          address: "1 Six Flags Blvd, Jackson Township, NJ 08527",
          url: "https://www.sixflags.com/greatadventure",
          img: "",
          })
        sixflags_nj.save(); 
      
        const cedarpoint = await new park({
          name: "Cedar Point",
          description: "Cedar Point is a 364-acre amusement park located on a Lake Erie peninsula in Sandusky, Ohio, United States. Opened in 1870, it is considered the second-oldest operating amusement park in the U.S. behind Lake Compounce. Cedar Point is owned and operated by Cedar Fair and is the flagship of the amusement park chain.",
          location: "Sandusky, Ohio",
          address: "1 Cedar Point Dr. Sandusky, OH 44870",
          url: "https://www.cedarpoint.com",
          img: "",
          })
          cedarpoint.save(); 

          const sixflags_cali = await new park({
            name: "Six Flags Magic Mountain",
            description: "Six Flags Magic Mountain, formerly known simply as Magic Mountain, is a 262-acre theme park located in Valencia, California, 35 miles northwest of downtown Los Angeles. It opened on May 29, 1971, as a development of the Newhall Land and Farming Company and Sea World Inc.",
            location: "Valencia, California",
            address: "26101 Magic Mountain Pkwy Valencia, CA 91355",
            url: "https://www.sixflags.com/magicmountain",
            img: "",
          })
          sixflags_cali.save(); 

          const carowinds = await new park({
            name: "Carowinds",
            description: "Carowinds is a 407-acre amusement park located adjacent to Interstate 77 in Charlotte, North Carolina. The park straddles the North Carolina-South Carolina state line, with a portion of the park located in Fort Mill, South Carolina.",
            location: "Charlotte, North Carolina",
            address: "300 Carowinds Blvd Charlotte, NC 28273",
            url: "https://www.carowinds.com",
            img: "",
          })
          carowinds.save(); 

          const kings_dominion = await new park({
            name: "Kings Dominion",
            description: "Kings Dominion is an amusement park located in Doswell, Virginia, 20 miles north of Richmond and 75 miles south of Washington, D.C.",
            location: "Doswell, Virginia",
            address: "16000 Theme Park Way, Doswell, VA 23047",
            url: "https://www.kingsdominion.com",
            img: "",
          })
          kings_dominion.save(); 

          const sixflags_tex = await new park({
            name: "Six Flags Over Texas",
            description: "Six Flags Over Texas is a 212-acre theme park located in Arlington, Texas, east of Fort Worth and west of Dallas. It is the first amusement park in the Six Flags chain.",
            location: "Arlington, Texas",
            address: "2201 E Road to Six Flags St, Arlington, TX 76011",
            url: "https://www.sixflags.com/overtexas",
            img: "",
          })
          sixflags_tex.save(); 
          
          const sixflags_tex = await new park({
            name: "Six Flags Over Texas",
            description: "Six Flags Over Texas is a 212-acre theme park located in Arlington, Texas, east of Fort Worth and west of Dallas. It is the first amusement park in the Six Flags chain.",
            location: "Arlington, Texas",
            address: "2201 E Road to Six Flags St, Arlington, TX 76011",
            url: "https://www.sixflags.com/overtexas",
            img: "",
          })
          sixflags_tex.save(); 




    // RIDES CREATIONS:    
        const products = [
          { name: "Kingda Ka",
            park: sixflags_nj._id,
            description: `A top hat tower of 456 ft looms up menacingly as you board its trains, on the dual loading platform. And the first impulse experienced, being locked inside a loaded train, is undoubtedly one of anxious anticipation. Be on your guard, for the train takes off every few minutes as it plunges 418 ft to form a 270-degree spiral while going down a U-shaped track. If your adventurous heartsix craves for more, go for the 12 other coasters housed inside the park and finally to let off some steam, unwind at the wildlife park, “Safari Off Road Adventure”.`,
            height: "456 ft",
            length: "3,118 ft",
            speed: "128 mph",
            type: "Steel",
            img: ""
          },
          { name: "El Toro",
            park: sixflags_nj._id,
            description: `El Toro is known to be a very rough, bumpy and exhilarating ride, and critics in a 2006 wooden roller coaster poll ranked it 3rd out of 178.`,
            height: "181 ft",
            length: "4,400 ft",
            speed: "70 mph",
            type: "Wood",
            img: ""
          },
          { name: "Top Thrill Dragster",
            park: cedarpoint._id,
            description: `Within just 3.8 seconds, this roller coaster, having steel accelerators reaches a speed of 120 mph before going up an unnerving 90-degree vertical slope. Soon, it would leave you gasping for air for dashing downward in a 270-degree twist. However, despite triumphing as the second loftiest roller coaster in the US, it is not counted among the best by reviewers.`,
            height: "420  ft",
            length: "2,800 ft",
            speed: "120  mph",
            type: "Steel",
            img: ""
          },
          { name: "Millennium Force",
            park: cedarpoint._id,
            description: `The alluring fascinations of this Giga coaster are many: it offers a thrilling ride, lasts for about 2 minutes and attains a speed of 93mph while going through a host of unnerving drops. Naturally, after its first unveiling in 2000, it has achieved either the 1st or 2nd rank at the Golden Ticket Awards. Another plus point is that it endows a ravishing view of Lake Erie.`,
            height: "310 ft",
            length: "6,595 ft",
            speed: "93 mph",
            type: "Steel",
            img: ""
          },
          { name: "Mean Streak",
            park: cedarpoint._id,
            description: `CLOSED: This classic wooden coaster was closed in 2016.`,
            height: "205 ft",
            length: "	5,740 ft",
            speed: "74  mph",
            type: "Wood",
            img: ""
          },
          { name: "Superman: Escape from Krypton",
          park: sixflags_cali._id,
          description: `CLOSED: This classic wooden coaster was closed in 2016.`,
          height: "205 ft",
          length: "	5,740 ft",
          speed: "74  mph",
          type: "Wood",
          img: ""
        },
        ]
      

    await Ride.insertMany(rides)
    console.log('Rides created')
}

const fun = async () => {
    await main()
    db.close()
}

run()