package auth

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"

	"strings"
)

type User struct {
	email        string
	username     string
	passwordhash string
	createDate   string
}

// Get user from redis or prisma
/* func getUserObject(email string) (User, bool) {
	// needs to be replaces using database
	for _, user := range userList {
		if user.email == email {
			return user, true
		}
	}

	return {}, false
} */

// checks if the password hash is valid
func (u *User) ValidatePasswordHash(passHash string) bool {
	return u.passwordhash == passHash
}

// add the user to the db
// prisma

// redis -> only for fast things

// function for generating the tokens.
func GenerateToken(header string, payload map[string]string, secret string) (string, error) {
	// create a new hash of type sha25, we pass the secret key to it
	h := hmac.New(sha256.New, []byte(secret))
	header64 := base64.StdEncoding.EncodeToString([]byte(header))
	// We then Marshel the payload whuch is a map. This converts it to a string
	payloadstr, err := json.Marshal(payload)
	if err != nil {
		// TODO: Replace with logrus
		fmt.Println("Err Generating Token")
		return string(payloadstr), err
	}
	payload64 := base64.StdEncoding.EncodeToString(payloadstr)

	// now ad dthe encoded string.
	message := header64 + "." + payload64

	// we have the unsigned message ready
	unsignedStr := header + string(payloadstr)

	// we write this to the SHA256 to hash it.
	h.Write([]byte(unsignedStr))
	signature := base64.StdEncoding.EncodeToString(h.Sum(nil))

	// Finally we have the token
	tokenStr := message + "." + signature
	return tokenStr, nil
}

// this helps validating the token
func ValidateToekn(token string, secret string) (bool, error) {
	// JWT has 3 parts seperated by '.'
	splitToken := strings.Split(token, ".")
	// if the length is not 3, we know it is correct
	if len(splitToken) != 3 {
		return false, nil
	}

	// decode the header and payload to strings
	header, err := base64.StdEncoding.DecodeString(splitToken[0])
	if err != nil {
		return false, err
	}
	payload, err := base64.StdEncoding.DecodeString(splitToken[1])
	if err != nil {
		return false, err
	}

	// again create the signature
	unsignedStr := string(header) + string(payload)
	h := hmac.New(sha256.New, []byte(secret))
	h.Write([]byte(unsignedStr))

	signature := base64.StdEncoding.EncodeToString(h.Sum(nil))

	if signature != splitToken[2] {
		return false, nil
	}

	// this means the token matches
	return true, nil
}

// signup handler
func SignupHandler(rw http.ResponseWriter, r *http.Request) {
	// extra error handling should be done at server side to prevent malisous attacks
	if _, ok := r.Header["Email"]; !ok {
		rw.WriteHeader(http.StatusBadRequest)
		rw.Write([]byte("Email Missing"))
		return
	}
	if _, ok := r.Header["Username"]; !ok {
		rw.WriteHeader(http.StatusBadRequest)
		rw.Write([]byte("Username Missing"))
		return
	}
	if _, ok := r.Header["Passwordhash"]; !ok {
		rw.WriteHeader(http.StatusBadRequest)
		rw.Write([]byte("Passwordhash Missing"))
		return
	}

	// validate and then add the user
	/*check := data.AddUserObject(r.Header["Email"][0], r.Header["Username"][0], r.Header["Passwordhash"][0],
		r.Header["Fullname"][0], 0)
	// if false means username already exists
	if !check {
		rw.WriteHeader(http.StatusConflict)
		rw.Write([]byte("Email or Username already exists"))
		return
	} */

	rw.WriteHeader(http.StatusOK)
	rw.Write([]byte("User Created"))
}

// TODO: Fix this function
// func getSignedToken() (string, error) {
// 	// we make a JWT Token here with signing method of ES256 and claims.
// 	// claims are attributes.
// 	// aud - audience
// 	// iss - issuer
// 	// exp - expiration of the Token
// 	claimsMap := map[string]string{
// 		"aud": "frontend.knowsearch.ml",
// 		"iss": "knowsearch.ml",
// 		"exp": fmt.Sprint(time.Now().Add(time.Minute * 1).Unix()),
// 	}
// 	// here we provide the shared secret. It should be very complex.
// 	// Also, it should be passed as a System Environment variable

// 	secret := "Secure_Random_String"
// 	header := "HS256"
// 	tokenString, err := jwt.GenerateToken(header, claimsMap, secret)
// 	if err != nil {
// 		return tokenString, err
// 	}
// 	return tokenString, nil
// }

// searches the user in the database.

// done through prisma
// TODO: Add prisma client

func validateUser(email string, passwordHash string) (bool, error) {
	// find a way to get the client here
	return false, nil
}

/* func validateUser(email string, passwordHash string) (bool, error) {
	usr, exists := data.GetUserObject(email)
	if !exists {
		return false, errors.New("user does not exist")
	}
	passwordCheck := usr.ValidatePasswordHash(passwordHash)

	if !passwordCheck {
		return false, nil
	}
	return true, nil
} */

func SigninHandler(rw http.ResponseWriter, r *http.Request) {
	// validate the request first.
	if _, ok := r.Header["Email"]; !ok {
		rw.WriteHeader(http.StatusBadRequest)
		rw.Write([]byte("Email Missing"))
		return
	}
	if _, ok := r.Header["Passwordhash"]; !ok {
		rw.WriteHeader(http.StatusBadRequest)
		rw.Write([]byte("Passwordhash Missing"))
		return
	}
	// let’s see if the user exists
	// TODO: Add validation through database
	/*valid, err := validateUser(r.Header["Email"][0], r.Header["Passwordhash"][0])
	if err != nil {
		// this means either the user does not exist
		rw.WriteHeader(http.StatusUnauthorized)
		rw.Write([]byte("User Does not Exist"))
		return
	}*/

	/*if !valid {
		// this means the password is wrong
		rw.WriteHeader(http.StatusUnauthorized)
		rw.Write([]byte("Incorrect Password"))
		return
	}*/
	// tokenString, err := getSignedToken()
	// if err != nil {
	// 	fmt.Println(err)
	// 	rw.WriteHeader(http.StatusInternalServerError)
	// 	rw.Write([]byte("Internal Server Error"))
	// 	return
	// }

	// rw.WriteHeader(http.StatusOK)
	// rw.Write([]byte(tokenString))
}

func tokenValidationMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		// check if token is present
		if _, ok := r.Header["Token"]; !ok {
			rw.WriteHeader(http.StatusUnauthorized)
			rw.Write([]byte("Token Missing"))
			return
		}
		// TODO: Check JWT middleware docs for information on the topic
		// token := r.Header["Token"][0]
		// check, err := jwt.ValidateToken(token, "Secure_Random_String")

		// if err != nil {
		// 	rw.WriteHeader(http.StatusInternalServerError)
		// 	rw.Write([]byte("Token Validation Failed"))
		// 	return
		// }
		// if !check {
		// 	rw.WriteHeader(http.StatusUnauthorized)
		// 	rw.Write([]byte("Token Invalid"))
		// 	return
		// }
		rw.WriteHeader(http.StatusOK)
		rw.Write([]byte("Authorized Token"))

	})
}
