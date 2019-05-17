/*Setup database*/
DROP DATABASE IF EXISTS `resistance`;
CREATE DATABASE `resistance`;
USE `resistance`;

SET NAMES utf8;

/*Create users table with specified fields.*/
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `username` VARCHAR(15) NOT NULL UNIQUE,
    `password` VARCHAR(15) NOT NULL,
    `displayname` VARCHAR(15) NOT NULL UNIQUE,
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `win_count` INT NOT NULL DEFAULT 0,
    `games_count` INT NOT NULL DEFAULT 0,
    `date_created` TIMESTAMP
);

/*Create games table with specified fields.
  `winner` is NULL if game was not completed, true if good guys won, false otherwise.*/
DROP TABLE IF EXISTS `games`;
CREATE TABLE `games` (
    `game_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `date` TIMESTAMP,
    `winner` BOOLEAN
);

/*Create users games junction table with additional role field.*/
DROP TABLE IF EXISTS `users_games_relation`;
CREATE TABLE `users_games_relation`(
    `user_id` INT UNSIGNED NOT NULL,
    `game_id` INT UNSIGNED NOT NULL,
    `role` ENUM('good','bad','merlin','percival','special bad') NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`game_id`) REFERENCES `games`(`game_id`)
);