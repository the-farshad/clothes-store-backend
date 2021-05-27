const express = require('express');
const uuid = require('uuid');
const slugify = require('slugify')
const router = express.Router();
var mysql = require('mysql2');
const connectionOptions = require('../connection');


console.log('MySQL Connection config:');
console.log(connectionOptions);

// Create New Store
router.post('/create-store', (req, res) => {
    const content = req.body;
    if (!content.storeName || !content.phone) {
        return res.status(400).json({
            msg: 'Please add a store name and phone number'
        });
    }

    const store = {
        ...content,
        uuid: uuid.v4(),
        slug: slugify(content.title),
        createdBy: 'userAuth'
    };
    var response = false;
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();

    const queryString = `INSERT INTO stores (id, uuid, storeName, imageUrl, slug, phone, createdBy) VALUES ('${store.id}','${store.uuid}', '${store.storeName}', '${store.imageUrl}', '${store.slug}', '${store.phone}', '${store.createdBy}')`;
    connection.query(queryString, function (error, results, fields) {
        if (error) throw error;
        response = {
            message: 'New store is created.',
            status: true
        }
        return res.status(201).json(response);
    });
    if (response) {
        return res.status(500).json({
            message: 'Something wrong',
            status: false
        });
    }
    // res.redirect('/');
});


// Create New Store
router.post('/create-product', (req, res) => {
    const content = req.body;
    if (!content.title || !content.price) {
        return res.status(400).json({
            msg: 'Please add a title name and price'
        });
    }

    const store = {
        ...content,
        uuid: uuid.v4(),
        slug: slugify(content.storeName),
        createdBy: 'userAuth'
    };
    var response = false;
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();

    const queryString = `INSERT INTO product (id, uuid, title, imageUrl, price, slug) VALUES ('${store.id}','${store.uuid}', '${store.title}', '${store.imageUrl}',, '${store.price}', '${store.slug}')`;
    connection.query(queryString, function (error, results, fields) {
        if (error) throw error;
        response = {
            message: 'New store is product.',
            status: true
        }
        return res.status(201).json(response);
    });
    if (response) {
        return res.status(500).json({
            message: 'Something wrong',
            status: false
        });
    }
    // res.redirect('/');
});


// Create New Store
router.post('/create-category', (req, res) => {
    const content = req.body;
    if (!content.title) {
        return res.status(400).json({
            msg: 'Please add a title name'
        });
    }

    const store = {
        ...content,
        uuid: uuid.v4(),
        slug: slugify(content.storeName),
        createdBy: 'userAuth'
    };
    var response = false;
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();

    const queryString = `INSERT INTO category (id, uuid, title, imageUrl, slug) VALUES ('${store.id}','${store.uuid}', '${store.title}', '${store.imageUrl}', '${store.slug}')`;
    connection.query(queryString, function (error, results, fields) {
        if (error) throw error;
        response = {
            message: 'New product is category.',
            status: true
        }
        return res.status(201).json(response);
    });
    if (response) {
        return res.status(500).json({
            message: 'Something wrong',
            status: false
        });
    }
    // res.redirect('/');
});


// Search product by id
router.get('/product/:id', function (req, res) {
    console.log(req)

    var connection = mysql.createConnection(connectionOptions);
    const id = parseInt(req.params.id)

    connection.connect();
    connection.query(`SELECT * FROM product WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;

        if (results.length) {
            return res.status(200).json(results)
        }

        res.status(400).json({
            msg: 'No records found'
        });
    });

    connection.end();
});

// update price product by id
router.put('/update-product/:id/:price', function (req, res) {
    console.log(req)

    var connection = mysql.createConnection(connectionOptions);
    const id = parseInt(req.params.id)
    const price = parseInt(req.params.price)

    connection.connect();
    connection.query(`UPDATE product SET price =${price} WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;

        if (results.affectedRows) {
            return res.status(203).json({
                message: 'record updated successfully',
                status: true
            });
        }
        res.status(400).json({
            message: 'No records found',
            status: false
        });
    });

    connection.end();
});


// delete store by id
router.delete('/delete-product/:id', function (req, res) {
    console.log(req)

    var connection = mysql.createConnection(connectionOptions);
    const id = parseInt(req.params.id)

    connection.connect();
    connection.query(`DELETE FROM stores WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;

        if (results.affectedRows) {
            return res.status(200).json({
                message: 'record deleted successfully',
                status: true
            });
        }
        res.status(400).json({
            message: 'No records found',
            status: false
        });
    });

    connection.end();
});

// Get all stores information
router.get('/stores', function (req, res) {

    var connection = mysql.createConnection(connectionOptions);
    connection.connect();

    connection.query('SELECT * FROM stores', function (error, results, fields) {
        if (error) throw error;

        if (results.length) {
            return res.status(200).json(results)
        }

        res.status(400).json({
            msg: 'No records found'
        });
    });

    connection.end();
});


router.get('/product', function (req, res) {

    var connection = mysql.createConnection(connectionOptions);

    connection.connect();

    connection.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error;

        if (results.length) {
            return res.status(200).json(results)
        }

        res.status(400).json({
            msg: 'No records found'
        });
    });

    connection.end();
});

router.get('/category', function (req, res) {

    var connection = mysql.createConnection(connectionOptions);

    connection.connect();

    connection.query('SELECT * FROM category', function (error, results, fields) {
        if (error) throw error;

        if (results.length) {
            return res.status(200).json(results)
        }

        res.status(400).json({
            msg: 'No records found'
        });
    });

    connection.end();
});



module.exports = router;