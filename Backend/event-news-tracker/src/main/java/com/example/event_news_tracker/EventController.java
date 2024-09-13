package com.example.event_news_tracker;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allows requests from React app
public class EventController {

    @GetMapping("/events")
    public String getEvents() {
      return List.of("Concert A", "Conference B", "Sports Match C");

    }
}