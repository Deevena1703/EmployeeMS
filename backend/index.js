const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 6600;
const mysql = require('mysql');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const cors = require('cors');
app.use(cors());
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample'
})
connection.connect((err) => {
    if (!err) {
        console.log('database connected');
    }
    else {
        console.log('check your database');
        console.log(err);
    }
})
app.post('/empregister', (req, res) => {
    console.log(req.body);

    connection.query('insert into employees (fullname,email,password,phone,designation,reportedto,doj,gender) values("' + req.body.fullname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.phone + '","' + req.body.designation + '","' + req.body.reportedto + '","' + req.body.doj + '","' + req.body.gender + '")', (err, row) => {
        if (!err && row !== '') {
            res.send(row);
            console.log('1 row inserted');
        } else {
            res.send(err);
            console.log(err);
        }
    })

})
app.post('/managerregister', (req, res) => {
    console.log(req.body);

    connection.query('insert into managers (fullname,email,password,phone,department,experience,doj,gender) values("' + req.body.fullname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.phone + '","' + req.body.department + '","' + req.body.experience+ '","' + req.body.doj + '","' + req.body.gender + '")', (err, row) => {
        if (!err && row !== '') {
            res.send(row);
            console.log('1 row inserted');
        } else {
            res.send(err);
            console.log(err);
        }
    })
})
app.post('/manager', (req, res) => {
    console.log(req.body);

    connection.query('insert into manager (name,email,password,phone,previousexperience,department,doj,gender) values("' + req.body.name + '","' + req.body.email + '","' + req.body.password + '","' + req.body.phone + '","' + req.body.previousexperience + '","' + req.body.department + '","' + req.body.doj + '","' + req.body.gender + '")', (err, row) => {
        if (!err) {
            res.send(row);
            console.log('1 row inserted');
        } else {
            res.send(err);
        }
    })

})
app.post('/students', (req, res) => {
    console.log(req.body);

    connection.query('insert into students (firstname,lastname,email,password,gender,age,role) values("' + req.body.firstname + '","' + req.body.lastname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.gender + '","' + req.body.age + '","' + req.body.role + '")', (err, row) => {
        if (!err) {
            res.send(row);
            console.log('1 row inserted');
        } else {
            res.send(err);
        }
    })

})
app.post('/employeeLogin', (req, res) => {
    console.log(req.body);

    connection.query('select * from employees where email = "' + req.body.email + '" and password = "' + req.body.password + '" ', (err, row) => {
        if (!err) {
            res.send(row);
        } else {


            res.send(err);
            console.log(err);

        }
    })

})

app.post('/adminLogin', (req, res) => {
    console.log(req.body);

    connection.query('select * from admin where email = "' + req.body.email + '" and password = "' + req.body.password + '" ', (err, row) => {
        if (!err) {
            res.send(row);
        } else {


            res.send(err);
            console.log(err);

        }
    })

})
 app.post('/managerLogin', (req, res) => {

console.log(req.body);
connection.query('select * from managers where email = "' + req.body.email + '" and password = "' + req.body.password + '" ', (err, row) => {
    if (!err) {
        res.send(row);
    } else {


        res.send(err);
        console.log(err);

    }
})
 })





app.get('/empdetails/:id', (req, res) => {
    console.log(req.body)

    connection.query('select * from employees where id="' + req.params.id + '"', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row)
        } else {
            res.send(err);
            console.log(err);
        }
    })
})

app.get('/mandetails/:id', (req, res) => {
    console.log(req.body)

    connection.query('select * from managers where id="' + req.params.id + '"', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row)
        } else {
            res.send(err);
            console.log(err);
        }
    })
})

app.get('/singleid/:id', (req, res) => {


    connection.query('select * from users where id = "' + req.params.id + '" ', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})
app.get('/edetails/:id', (req, res) => {


    connection.query('select * from employees where id = "' + req.params.id + '" ', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})

app.get('/managerteam/:fullname', (req, res) => {


    connection.query('select * from employees where reportedto = "' + req.params.fullname + '" ', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
            console.log(err);
        }
    })
})
app.post('/userupdate/:id', (req, res) => {
    connection.query('update users set firstname="' + req.body.firstname + '",lastname="' + req.body.lastname + '",email="' + req.body.email + '" ,password="' + req.body.password + '",gender="' + req.body.gender + '",age="' + req.body.age + '" where id="' + req.params.id + '" ', (err, row) => {
        if (!err) {
            res.send(row);
        }
        else {
            res.send(err);
        }
    })
})


app.post('/delrec/:id', (req, res) => {
    connection.query('delete  from managers where id="' + req.params.id + '"', (err, row) => {
        if (!err) {
            res.send(row);

        }
        else {
            res.send(err);
        }
    })
}
)

app.post('/edelrec/:id', (req, res) => {
    connection.query('delete  from employees where id="' + req.params.id + '"', (err, row) => {
        if (!err) {
            res.send(row);

        }
        else {
            res.send(err);
        }
    })
}
)
app.get('/employeelist', (req, res) => {


    connection.query('select * from employees', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})
app.get('/managerlist', (req, res) => {


    connection.query('select * from managers', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})


app.get('/salarylist', (req, res) => {


    connection.query('select * from employees', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})
app.get('/getmanager', (req, res) => {


    connection.query('select fullname from managers', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})

  app.get('/employeedata/:id', (req, res) => {


    connection.query('select * from employees where id = "' + req.params.id + '" ', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})

app.post('/employeeupdate/:id', (req, res) => {
    connection.query('update employees set fullname="' + req.body.fullname + '",email="' + req.body.email + '" ,password="' + req.body.password + '",phone="' + req.body.phone + '", designation="' + req.body.designation+ '",reportedto="' + req.body.reportedto+'",doj="' + req.body.doj+ '",gender="' + req.body.gender + '" where id="' + req.params.id + '" ', (err, row) => {
        if (!err) {
            res.send(row);
        }
        else {
            res.send(err);
            console.log(err);
        }
    })
})

app.post('/managerupdate/:id', (req, res) => {
    connection.query('update managers set fullname="' + req.body.fullname + '",email="' + req.body.email + '" ,password="' + req.body.password + '",phone="' + req.body.phone + '", department="' + req.body.department+ '",experience="' + req.body.experience+'",doj="' + req.body.doj+ '",gender="' + req.body.gender + '" where id="' + req.params.id + '" ', (err, row) => {
        if (!err) {
            res.send(row);
        }
        else {
            res.send(err);
            console.log(err);
        }
    })
})


app.post('/managersalaryupdate/:id', (req, res) => {
    connection.query('update managers set salary="' + req.body.salary + '"  where id="'+req.params.id+'" ', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row)
        }
        else {
            res.send(err);
            console.log(err);
        }
    })
})



    app.post('/employeesalaryupdate/:id', (req, res) => {
        connection.query('update employees set salary="' + req.body.salary + '"  where id="'+req.params.id+'" ', (err, row) => {
            if (!err) {
                res.send(row);
                console.log(row)
            }
            else {
                res.send(err);
                console.log(err);
            }
        })
    })

   app.post('/empchangepassword/:id', (req, res) => {
        connection.query('update employees set password="' + req.body.newpassword + '"  where id="'+req.params.id+'" and password="'+req.body.currentpassword+'"' , (err, row) => {
            if (!err) {
                res.send(row);
                console.log(row)
            }
            else {
                res.send(err);
                console.log(err);
            }
        }) 
    })
    app.post('/manchangepassword/:id', (req, res) => {
        connection.query('update managerss set password="' + req.body.newpassword + '"  where id="'+req.params.id+'" and password="'+req.body.currentpassword+'"' , (err, row) => {
            if (!err) {
                res.send(row);
                console.log(row)
            }
            else {
                res.send(err);
                console.log(err);
            }
        }) 
    })
    app.get('/managerdata/:id', (req, res) => {
    connection.query('select * from managers where id = "' + req.params.id + '" ', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})


app.get('/employeerowcount', (req, res) => {


    connection.query('select count(*)  from employees', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})

app.get('/managerrowcount', (req, res) => {


    connection.query('select count(*)  from managers', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})

app.get('/msumsalary', (req, res) => {


    connection.query('select sum(salary)  from managers', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})

app.get('/esumsalary', (req, res) => {


    connection.query('select sum(salary)  from employees', (err, row) => {
        if (!err) {
            res.send(row);
            console.log(row);
        }
        else {
            res.send(err);
        }
    })
})


server.listen(port, () => {
    console.log("conection succesful on " + port);
})