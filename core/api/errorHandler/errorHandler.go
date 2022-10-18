package errorhandler

func HandleError(erorrString error) error {
	if erorrString != nil {
		return erorrString
	}

	return nil
}
