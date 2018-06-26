var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
    {
        name: 'Smart TV',
        image: 'https://www.pinetreesociety.org/wp-content/uploads/2017/10/cabins-960x600.jpg',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ' +
        'It has roots in a piece of classical Latin literature from 45 BC, making ' +
        'it over 2000 years old. Richard McClintock, a Latin professor at ' +
        'Hampden-Sydney College in Virginia, looked up one of the more obscure ' +
        'Latin words, consectetur, from a Lorem Ipsum passage, and going through ' +
        'the cites of the word in classical literature, discovered the undoubtable ' +
        'source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus ' +
        'Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in ' +
        '45 BC. This book is a treatise on the theory of ethics, very popular ' +
        'during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor ' +
        'sit amet..", comes from a line in section 1.10.32.'
    },
    {
        name: 'Smart Phone',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkn4RxZO2gkmZYvFTj-CM-tidCqlrjpQ17F0KwwDowOeJsXfif',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ' +
        'It has roots in a piece of classical Latin literature from 45 BC, making ' +
        'it over 2000 years old. Richard McClintock, a Latin professor at ' +
        'Hampden-Sydney College in Virginia, looked up one of the more obscure ' +
        'Latin words, consectetur, from a Lorem Ipsum passage, and going through ' +
        'the cites of the word in classical literature, discovered the undoubtable ' +
        'source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus ' +
        'Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in ' +
        '45 BC. This book is a treatise on the theory of ethics, very popular ' +
        'during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor ' +
        'sit amet..", comes from a line in section 1.10.32.'
    }];

function seedDB() {
    //REMOVE ALL CAMPGROUND
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('removed campground');
            data.forEach(function (seed) {
                Campground.create(seed, function (err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('added a campground');
                        //CREATE A COMMENT
                        Comment.create(
                            {
                                text: 'this place is awesome',
                                author: 'Alonso'
                            }, function (err, comment) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log('created new comment')
                                }
                            }
                        )
                    }
                });
            });
        }
    });
}

//ADD A FEW CAMPGROUND


//CREATE CAMPGROUND


module.exports = seedDB;