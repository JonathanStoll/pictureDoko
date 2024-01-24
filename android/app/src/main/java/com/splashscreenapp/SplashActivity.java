package com.picturedoko;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Assuming MainActivity is the launcher activity in your manifest
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}

