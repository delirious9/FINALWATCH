const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
const LogInCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)


app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})



// app.get('/home', (req, res) => {
//     res.render('home')
// })

app.post('/signup', async (req, res) => {
    
    // const data = new LogInCollection({
    //     name: req.body.name,
    //     password: req.body.password
    // })
    // await data.save()

    const data = {
        name: req.body.name,
        password: req.body.password
    }

    const checking = await LogInCollection.findOne({ name: req.body.name })

   try{
    if (checking.name === req.body.name && checking.password===req.body.password) {
        res.send("user details already exists")
    }
    else{
        await LogInCollection.insertMany([data])
    }
   }
   catch{
    res.send("wrong inputs")
   }

    res.status(201).render("home", {
        naming: req.body.name
    })
})


app.post('/login', async (req, res) => {
    try {
        // Check if the input is either a username or email
        const check = await LogInCollection.findOne({
            $or: [{ name: req.body.name }, { email: req.body.name }]
        });

        if (!check) {
            return res.send("User not found"); // User not found in the database
        }

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` });
        } else {
            res.send("Incorrect password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal server error");
    }
});


app.post('/forgot-password', async (req, res) => {

    try {
        const user = await UserCollection.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const temporaryPassword = generateTemporaryPassword();

        sendTemporaryPasswordEmail(user.email, temporaryPassword);

        await UserCollection.updateOne({ email: req.body.email }, { $set: { password: temporaryPassword } });

        res.status(200).send("Temporary password sent successfully. Please check your email.");

    } catch (error) {
        res.status(500).send("Internal server error");
    }
})



app.listen(port, () => {
    console.log('port connected');
})
