import React from 'react';
import {
  Header,
  Segment,
  Container,
  Card,
  Grid,
  Image,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/beers';
import beerStock from '../images/beer.jpg';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import axios from 'axios';
