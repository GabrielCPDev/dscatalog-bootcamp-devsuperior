package com.gabriel.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gabriel.dscatalog.entities.Product;
import com.gabriel.dscatalog.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
