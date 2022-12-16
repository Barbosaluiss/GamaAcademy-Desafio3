-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lavie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lavie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lavie` DEFAULT CHARACTER SET utf8 ;
USE `lavie` ;

-- -----------------------------------------------------
-- Table `lavie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`psicologos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `apresentacao` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lavie`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`pacientes` (
  `id_paciente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `idade` DATE NOT NULL,
  PRIMARY KEY (`id_paciente`),
  UNIQUE INDEX `Email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lavie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`atendimentos` (
  `id_atendimentos` INT NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATE NOT NULL,
  `observacao` VARCHAR(200) NOT NULL,
  `pacientes_id` INT NOT NULL,
  `psicologos_id` INT NOT NULL,
  PRIMARY KEY (`id_atendimentos`, `pacientes_id`, `psicologos_id`),
  INDEX `fk_Atendimentos_Pacientes1_idx` (`pacientes_id` ASC) VISIBLE,
  INDEX `fk_Atendimentos_Psicólogos1_idx` (`psicologos_id` ASC) VISIBLE,
  CONSTRAINT `fk_Atendimentos_Pacientes1`
    FOREIGN KEY (`pacientes_id`)
    REFERENCES `lavie`.`pacientes` (`id_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Atendimentos_Psicólogos1`
    FOREIGN KEY (`psicologos_id`)
    REFERENCES `lavie`.`psicologos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
