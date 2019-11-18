import express from 'express';
import api from '../api/'

const routes = express()

const API = '/api';

routes.use(API, api);

export default routes;
