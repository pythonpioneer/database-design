// constants for user
const userConstant = {
    MIN_NAME_LENGTH: 3,
    MIN_PASSWORD_LENGTH: 6,
    MAX_NAME_LENGTH: 40,
    MAX_PASSWORD_LENGTH: 40,
    MAX_EMAIL_LENGTH: 60,
}


/**
 * Regular expression to validate user passwords.
 * A valid password must contain at least:
 * - one lowercase letter
 * - one uppercase letter
 * - one digit
 * - one special character (@$!%*?&)
 * and be at least 6 characters long.
 */
const userPasswordRegex = {
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    INFO: `Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@$!%*?&) and be at least 6 characters long.`
}

// exporting all constant values
export const {
    MIN_NAME_LENGTH,
    MIN_PASSWORD_LENGTH,
    MAX_NAME_LENGTH,
    MAX_PASSWORD_LENGTH,
    MAX_EMAIL_LENGTH
} = userConstant;

export const { PATTERN: USER_PASSWORD_REGEX_PATTERN, INFO: USER_PASSWORD_REGEX_INFO } = userPasswordRegex;