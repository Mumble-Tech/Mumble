package server

import "server/prisma/db"

func createClient() (error, *db.PrismaClient) {
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return err, nil
	}

	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()

	return nil, client
}
