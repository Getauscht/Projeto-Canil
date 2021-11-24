import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    const list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os Animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    const list = Pet.getFromType('dog');

    res.render('pages/page', {
        
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req: Request, res: Response) => {
    const list = Pet.getFromType('cat');
    const sex = Pet.getFromSex('Feminino' || 'Masculino');

    res.render('pages/page', {

        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list,
        sex
    })
}

export const fishes = (req: Request, res: Response) => {
    const list = Pet.getFromType('fish');

    res.render('pages/page', {

        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    })
}