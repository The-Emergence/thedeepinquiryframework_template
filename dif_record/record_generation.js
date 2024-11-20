<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Participant Form</title>
  <link rel="stylesheet" href="webform.css">
</head>
<body>
  <div class="dif-webform-container">
    <h1 class="dif-webform-title">Participant Record Form</h1>

    <!-- Dropdown for Record Type Navigation -->
    <div class="form-group">
      <label for="record-type-selector">Navigate to Record Type:</label>
      <select id="record-type-selector" class="dif-webform-input">
        <option value="provider_form.html">Provider</option>
        <option value="curator_form.html">Curator</option>
        <option value="participant_form.html" selected>Participant</option>
        <option value="producer_form.html">Producer</option>
        <option value="insight_form.html">Insight</option>
      </select>
    </div>

    <form id="participant-form" action="/create-record" method="POST" enctype="multipart/form-data">
      <!-- Common Fields -->
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="person_name" class="dif-webform-input" required>
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" class="dif-webform-input" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" class="dif-webform-input">
      </div>

      <!-- Address Fields -->
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" class="dif-webform-input" placeholder="e.g., 123 Main St">
      </div>
      <div class="form-group">
        <label for="state">State:</label>
        <input type="text" id="state" name="state" class="dif-webform-input" placeholder="e.g., California">
      </div>
      <div class="form-group">
        <label for="zipcode">ZIP Code:</label>
        <input type="text" id="zipcode" name="zipcode" class="dif-webform-input" placeholder="e.g., 90210">
      </div>

      <!-- Focus -->
      <div class="form-group">
        <label for="focus">Primary Focus Area:</label>
        <input type="text" id="focus" name="focus" class="dif-webform-input" placeholder="e.g., Community Support">
      </div>
      <div class="form-group">
        <label for="call-to-action">Call to Action:</label>
        <input type="text" id="call-to-action" name="call_to_action" class="dif-webform-input" placeholder="e.g., Contact for Help">
      </div>

      <!-- Provider-Specific Fields -->
      <div class="form-group">
        <label for="provider-type">Provider Type:</label>
        <input type="text" id="provider-type" name="provider_type" class="dif-webform-input" placeholder="e.g., Organization">
      </div>
      <div class="form-group">
        <label for="description">Participant Description:</label>
        <textarea id="description" name="description" class="dif-webform-input" rows="4"></textarea>
      </div>

      <!-- Image Upload -->
      <div class="form-group">
        <label for="record-image">Upload Record Image:</label>
        <input type="file" id="record-image" name="record_image" class="dif-webform-input" accept="image/*">
      </div>
      
      <!-- Association Section -->
      <div class="form-group">
        <label for="associated-record">Link to Another Record:</label>
        <input type="text" id="associated-record" name="associated_record" class="dif-webform-input" placeholder="Search for related records...">
      </div>
      <div class="form-group">
        <label for="association-role">Role in Association:</label>
        <input type="text" id="association-role" name="association_role" class="dif-webform-input" placeholder="e.g., Author, Member">
      </div>

      <!-- Words Section -->
      <h2>Add Words to Prioritize Your Feed</h2>
      <div class="form-group">
        <label for="subject-words">Subject Words:</label>
        <input type="text" id="subject-words" name="subject_words" class="dif-webform-input" placeholder="e.g., Collaboration">
      </div>
      <div class="form-group">
        <label for="predicate-words">Predicate Words:</label>
        <input type="text" id="predicate-words" name="predicate_words" class="dif-webform-input" placeholder="e.g., Drives Innovation">
      </div>
      <div class="form-group">
        <label for="object-words">Object Words:</label>
        <input type="text" id="object-words" name="object_words" class="dif-webform-input" placeholder="e.g., Technology">
      </div>

      <!-- Submit Button -->
      <div class="form-group">
        <button type="submit" class="dif-webform-submit">Submit</button>
      </div>
    </form>
  </div>

  <script src="webform_navigation.js"></script>
</body>
</html>
