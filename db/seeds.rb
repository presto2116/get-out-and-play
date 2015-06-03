# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Activity.create([creator: "presto2116", title: "Disc Golf", date: "2015/09/22", location: "Senaca Creek State Park", description: "Come play disc golf with my dog and me!"])
Activity.create([creator: "presto2116", title: "Dog Park", date: "2015/10/25", location: "Cabin John Dog Park", description: "Lets get outside and play with our dogs!"])
Activity.create([creator: "presto2116", title: "Thursday Night Soccer", date: "2015/11/31", location: "Silver Spring Park", description: "Lets play soccer. No skills needed."])