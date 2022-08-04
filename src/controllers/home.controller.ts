import express, { Request, Response } from "express";
export default class HomeController {
  static async index(req: Request, res: Response) {
    try {
      return res.status(200).json("");
    } catch (error) {
      console.log(error);
    }
  }
}
